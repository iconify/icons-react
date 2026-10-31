import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/c/cxrgzuprv.css';
import '../../css/b/buy7z5rhv.css';
import '../../css/h/h31h63b5p.css';
import '../../css/p/p6lw3j9pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNAtBfbbw" x1="9" x2="15" y1="2.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path class="cxrgzuprv wm-s"/><path fill="url(#SVGNAtBfbbw)" class="buy7z5rhv"/><path class="h31h63b5p wm-s"/><path class="p6lw3j9pa wm-shine"/></g>`,
		"fallback": "withicons-utsav:heart-gift",
	});
}

export default Component;
