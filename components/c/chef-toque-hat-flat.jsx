import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0tvnwz3v.css';
import '../../css/y/y1n0s7bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i0tvnwz3v"/><path class="y1n0s7bgk"/></g>`,
		"fallback": "streamline-sharp-color:chef-toque-hat-flat",
	});
}

export default Component;
