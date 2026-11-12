import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfc305asn.css';
import '../../css/y/yyp3kacgv.css';
import '../../css/i/iycln-b8i.css';
import '../../css/b/bt5216xcz.css';
import '../../css/v/v_wl77bax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGhTSIPRWX" x1="507.3" x2="89.7" y1="-16.7" y2="436.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="zfc305asn"/><stop offset="1" class="yyp3kacgv"/></linearGradient><circle fill="url(#SVGhTSIPRWX)" class="iycln-b8i"/><path class="bt5216xcz"/><path class="v_wl77bax"/>`,
		"fallback": "selfhst:bracket",
	});
}

export default Component;
