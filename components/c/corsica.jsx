import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym8kz_1yf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym8kz_1yf"/>`,
		"fallback": "game-icons:corsica",
	});
}

export default Component;
