import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6_fg-lkg.css';
import '../../css/k/kpu7t4bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6_fg-lkg"/><path class="kpu7t4bcc"/>`,
		"fallback": "boxicons:arrow-out-down-right-stroke-circle",
	});
}

export default Component;
