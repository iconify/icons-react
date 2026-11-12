import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8534puqy.css';
import '../../css/i/ilc7r0byc.css';
import '../../css/j/j2bt8rbvg.css';
import '../../css/n/nlcgjd-cz.css';
import '../../css/t/tmevhwbne.css';
import '../../css/l/laogbnbxu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGyQEjfckB" x1="256" x2="256" y2="512" gradientUnits="userSpaceOnUse"><stop offset="0" class="b8534puqy"/><stop offset="1" class="ilc7r0byc"/></linearGradient><path fill="url(#SVGyQEjfckB)" class="j2bt8rbvg"/><path class="nlcgjd-cz"/><linearGradient id="SVGMHcvXbTW" x1="165.9" x2="307.8" y1="163" y2="394.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="ilc7r0byc"/><stop offset="1" class="tmevhwbne"/><stop offset="1" class="tmevhwbne"/><stop offset="1" class="tmevhwbne"/></linearGradient><path fill="url(#SVGMHcvXbTW)" class="laogbnbxu"/>`,
		"fallback": "selfhst:haptic",
	});
}

export default Component;
