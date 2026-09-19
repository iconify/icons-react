import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxuixt5nd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxuixt5nd"/>`,
		"fallback": "game-icons:fire-tail",
	});
}

export default Component;
