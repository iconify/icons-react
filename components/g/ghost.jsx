import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/e/ewzzrdutx.css';
import '../../css/w/wb4dpwbbx.css';
import '../../css/z/z3gvilbto.css';
import '../../css/d/dfw-wsuqs.css';
import '../../css/w/we4insb-v.css';
import '../../css/n/nhhuhjf6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGN1Muadnp" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="vc--wpv5i"/><stop offset="1" class="ewzzrdutx"/></linearGradient></defs><g transform="matrix(2.4 0 0 2.4 16 16)"><path fill="url(#SVGN1Muadnp)" class="wb4dpwbbx"/><ellipse class="z3gvilbto"/><ellipse class="dfw-wsuqs"/><ellipse class="we4insb-v"/><path class="nhhuhjf6d"/></g>`,
		"fallback": "xero-emoji:ghost",
	});
}

export default Component;
