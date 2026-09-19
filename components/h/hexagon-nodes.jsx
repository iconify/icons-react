import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imh-7cbij.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imh-7cbij"/>`,
		"fallback": "fa7-solid:hexagon-nodes",
	});
}

export default Component;
