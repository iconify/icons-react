import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlcmzuqic.css';
import '../../css/s/ssz8lb_zq.css';
import '../../css/g/gghg_xb4a.css';
import '../../css/e/ezgphqtfm.css';
import '../../css/p/p24j4fbyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG7broUcAU" x1="3387.043" x2="4262.065" y1="-1048.576" y2="286.095" gradientTransform="matrix(.2265 .05678 .05678 -.2265 -567.89 -91.71)" gradientUnits="userSpaceOnUse"><stop offset="0" class="wlcmzuqic"/><stop offset=".473" class="ssz8lb_zq"/><stop offset="1" class="gghg_xb4a"/></linearGradient><path fill="url(#SVG7broUcAU)" class="ezgphqtfm"/><path class="p24j4fbyq"/>`,
		"fallback": "selfhst:hexabot",
	});
}

export default Component;
