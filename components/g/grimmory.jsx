import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_dnz-bmn.css';
import '../../css/e/eihwnp22l.css';
import '../../css/f/fb79iol1o.css';
import '../../css/u/uxbmyhwdw.css';
import '../../css/u/unezvccyh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_dnz-bmn"/><linearGradient id="SVGYa3VbeVG" x1="256" x2="256" y1="514" y2="28.262" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="eihwnp22l"/><stop offset="1" class="fb79iol1o"/></linearGradient><path fill="url(#SVGYa3VbeVG)" class="uxbmyhwdw"/><linearGradient id="SVG7NW0od9v" x1="344.483" x2="344.483" y1="514" y2="28.262" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="eihwnp22l"/><stop offset="1" class="fb79iol1o"/></linearGradient><path fill="url(#SVG7NW0od9v)" class="unezvccyh"/>`,
		"fallback": "selfhst:grimmory",
	});
}

export default Component;
