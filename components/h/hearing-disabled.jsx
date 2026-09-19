import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx1ugx-4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx1ugx-4z"/>`,
		"fallback": "game-icons:hearing-disabled",
	});
}

export default Component;
