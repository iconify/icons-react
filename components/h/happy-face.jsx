import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/f/fpgabibbq.css';
import '../../css/w/wzw7k-iny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="fpgabibbq"/><path class="wzw7k-iny"/></g>`,
		"fallback": "streamline-flex-color:happy-face",
	});
}

export default Component;
