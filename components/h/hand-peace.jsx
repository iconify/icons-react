import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjhyvcc9r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjhyvcc9r"/>`,
		"fallback": "fa7-solid:hand-peace",
	});
}

export default Component;
