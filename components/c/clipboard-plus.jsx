import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox5bagm_m.css';
import '../../css/p/pa14hnb-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox5bagm_m"/><path class="pa14hnb-c"/>`,
		"fallback": "boxicons:clipboard-plus",
	});
}

export default Component;
