import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jphow5moh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jphow5moh"/>`,
		"fallback": "carbon:flow-conditional",
	});
}

export default Component;
