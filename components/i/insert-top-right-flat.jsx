import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-tg_9qtv.css';
import '../../css/f/ff-hyoj_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-tg_9qtv"/><path clip-rule="evenodd" class="ff-hyoj_e"/></g>`,
		"fallback": "streamline-color:insert-top-right-flat",
	});
}

export default Component;
