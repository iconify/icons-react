import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egm3kjffr.css';
import '../../css/p/p_qts-b_r.css';
import '../../css/k/k05n1gbkm.css';
import '../../css/n/ndig75b3r.css';
import '../../css/y/y9diz7uzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egm3kjffr"/><linearGradient id="SVGrCuDfbcf" x1="130.499" x2="643.024" y1="167.202" y2="-441.691" gradientTransform="matrix(1 0 0 -1 0 236)" gradientUnits="userSpaceOnUse"><stop offset="0" class="p_qts-b_r"/><stop offset="1" class="k05n1gbkm"/></linearGradient><path fill="url(#SVGrCuDfbcf)" class="ndig75b3r"/><path class="y9diz7uzk"/>`,
		"fallback": "selfhst:hydrus-web",
	});
}

export default Component;
