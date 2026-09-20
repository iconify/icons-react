import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf38611nk.css';
import '../../css/z/zzxpkyxfn.css';
import '../../css/w/w6tuuh_hi.css';
import '../../css/h/hncib8b1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGwIXbaeAs" x1="-473.572" x2="-473.572" y1="-11.482" y2="-10.482" gradientTransform="matrix(512 0 0 512 242725 5878)" gradientUnits="userSpaceOnUse"><stop offset="0" class="hf38611nk"/><stop offset="1" class="zzxpkyxfn"/></linearGradient><path fill="url(#SVGwIXbaeAs)" class="w6tuuh_hi"/><path class="hncib8b1o"/>`,
		"fallback": "selfhst:app-store",
	});
}

export default Component;
