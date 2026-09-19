import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arzliyesj.css';
import '../../css/j/jjrjjnjfn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arzliyesj"/><path class="jjrjjnjfn"/>`,
		"fallback": "carbon:development",
	});
}

export default Component;
