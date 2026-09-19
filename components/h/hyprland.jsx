import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg1mii81m.css';
import '../../css/a/a2w_u1foi.css';
import '../../css/b/bt7k3gbvb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGMmshBdVn" x1="561.93" x2="561.93" y1="593.85" y2="491.29" gradientTransform="translate(-18.683 -141.859)scale(.40906)" gradientUnits="userSpaceOnUse"><stop offset="0" class="xg1mii81m"/><stop offset="1" class="a2w_u1foi"/></linearGradient></defs><path fill="url(#SVGMmshBdVn)" class="bt7k3gbvb"/>`,
		"fallback": "devicon:hyprland",
	});
}

export default Component;
