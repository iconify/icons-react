import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teznrsbms.css';
import '../../css/y/ypvg3cc4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teznrsbms"/><path class="ypvg3cc4u"/>`,
		"fallback": "selfhst:chibisafe-dark",
	});
}

export default Component;
