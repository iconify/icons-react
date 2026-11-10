import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_97fg8eh.css';
import '../../css/w/wavz00y0u.css';
import '../../css/e/ep6j6hbsb.css';
import '../../css/v/vk2djvbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_97fg8eh"/><path class="wavz00y0u"/><circle class="ep6j6hbsb"/><path class="vk2djvbjd"/></g>`,
		"fallback": "andrsrxn:folder-prohibit",
	});
}

export default Component;
