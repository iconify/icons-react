import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i87l-4v0w.css';
import '../../css/r/rlyxf71gc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i87l-4v0w"/><path class="rlyxf71gc"/></g>`,
		"fallback": "streamline-color:airplane",
	});
}

export default Component;
