import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg1mii81m.css';
import '../../css/a/a2w_u1foi.css';
import '../../css/s/s8g6-c9hm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGY14XrXpy" x1="561.93" x2="561.93" y1="593.85" y2="491.29" gradientTransform="translate(-12.423 -12.742)scale(.1525)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xg1mii81m"/><stop offset="1" class="a2w_u1foi"/></linearGradient></defs><path fill="url(#SVGY14XrXpy)" class="s8g6-c9hm"/>`,
		"fallback": "devicon:hyprland-wordmark",
	});
}

export default Component;
