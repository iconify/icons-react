import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfc305asn.css';
import '../../css/y/yyp3kacgv.css';
import '../../css/b/b78_k0b_z.css';
import '../../css/b/bt5216xcz.css';
import '../../css/j/j_hfgp49k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGJCoEmemC" x1="507.297" x2="89.657" y1="-16.721" y2="436.525" gradientUnits="userSpaceOnUse"><stop offset="0" class="zfc305asn"/><stop offset="1" class="yyp3kacgv"/></linearGradient><circle fill="url(#SVGJCoEmemC)" class="b78_k0b_z"/><path class="bt5216xcz"/><path class="j_hfgp49k"/>`,
		"fallback": "selfhst:bracket",
	});
}

export default Component;
