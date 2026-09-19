import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnx-vib2x.css';
import '../../css/y/yc146_bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnx-vib2x"/><path class="yc146_bio"/>`,
		"fallback": "bx:bx-message-rounded-edit",
	});
}

export default Component;
