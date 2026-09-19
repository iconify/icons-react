import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h30_pj2ow.css';
import '../../css/t/tmh0ewb2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h30_pj2ow"/><path class="tmh0ewb2e"/>`,
		"fallback": "boxicons:dock-right-alt",
	});
}

export default Component;
