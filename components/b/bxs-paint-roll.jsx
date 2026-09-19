import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i37phhb_v.css';
import '../../css/u/uw6sq-v3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i37phhb_v"/><path class="uw6sq-v3i"/>`,
		"fallback": "bx:bxs-paint-roll",
	});
}

export default Component;
