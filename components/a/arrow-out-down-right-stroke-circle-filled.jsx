import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6ingvywc.css';
import '../../css/n/n6_fg-lkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6ingvywc"/><path class="n6_fg-lkg"/>`,
		"fallback": "boxicons:arrow-out-down-right-stroke-circle-filled",
	});
}

export default Component;
