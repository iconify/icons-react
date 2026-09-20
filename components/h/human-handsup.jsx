import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va-dhqb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va-dhqb2h"/>`,
		"fallback": "mdi:human-handsup",
	});
}

export default Component;
