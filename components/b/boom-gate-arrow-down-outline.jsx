import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz9uo7bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz9uo7bkq"/>`,
		"fallback": "mdi:boom-gate-arrow-down-outline",
	});
}

export default Component;
