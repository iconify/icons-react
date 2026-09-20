import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcb_rnbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcb_rnbtp"/>`,
		"fallback": "streamline-ultimate:color-blind-bold",
	});
}

export default Component;
