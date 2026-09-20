import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2cm4uj8a.css';
import '../../css/p/p19yc0bzc.css';
import '../../css/f/fwu668b3c.css';
import '../../css/u/upbz7vs7g.css';
import '../../css/z/zf3wxcugu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG7RxI2dYU" x1="28417.912" x2="28480.81" y1="-3141.223" y2="-3141.223" gradientTransform="translate(-2889.753 998.04)scale(.2362)" gradientUnits="userSpaceOnUse"><stop offset="0" class="q2cm4uj8a"/><stop offset="1"/></linearGradient><path fill="url(#SVG7RxI2dYU)" class="p19yc0bzc"/><path fill="url(#SVG7RxI2dYU)" class="fwu668b3c"/><linearGradient id="SVGsu8Feknt" x1="5962.56" x2="6025.458" y1="-148.142" y2="-148.142" gradientTransform="translate(-21598.316 792.6)scale(3.6223)" gradientUnits="userSpaceOnUse"><stop offset="0" class="upbz7vs7g"/><stop offset="1"/></linearGradient><path fill="url(#SVGsu8Feknt)" class="zf3wxcugu"/>`,
		"fallback": "selfhst:activitypub",
	});
}

export default Component;
