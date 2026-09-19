import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if3scb1kt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if3scb1kt"/>`,
		"fallback": "game-icons:cavalry",
	});
}

export default Component;
