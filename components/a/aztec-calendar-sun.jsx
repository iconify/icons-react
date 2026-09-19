import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwg_unjmp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwg_unjmp"/>`,
		"fallback": "game-icons:aztec-calendar-sun",
	});
}

export default Component;
