import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6_fg-lkg.css';
import '../../css/i/i9urgub_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6_fg-lkg"/><path class="i9urgub_t"/>`,
		"fallback": "boxicons:arrow-out-down-right-stroke-square-filled",
	});
}

export default Component;
