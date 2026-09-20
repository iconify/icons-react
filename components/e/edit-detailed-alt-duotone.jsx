import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-q_p4biq.css';
import '../../css/x/xf83swd9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-q_p4biq"/><path class="xf83swd9o"/></g>`,
		"fallback": "si:edit-detailed-alt-duotone",
	});
}

export default Component;
