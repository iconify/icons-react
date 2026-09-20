import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8534puqy.css';
import '../../css/i/ilc7r0byc.css';
import '../../css/j/j2bt8rbvg.css';
import '../../css/w/w7_z7delv.css';
import '../../css/v/v507xgbgm.css';
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
		"content": `<linearGradient id="SVG234ZFcez" x1="256" x2="256" y1="278" y2="790" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="b8534puqy"/><stop offset="1" class="ilc7r0byc"/></linearGradient><path fill="url(#SVG234ZFcez)" class="j2bt8rbvg"/><path class="w7_z7delv"/><path class="v507xgbgm"/><linearGradient id="SVGXymg2BWD" x1="165.864" x2="307.813" y1="440.977" y2="672.762" gradientTransform="translate(0 -278)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ilc7r0byc"/><stop offset="1" class="tmevhwbne"/><stop offset="1" class="tmevhwbne"/><stop offset="1" class="tmevhwbne"/></linearGradient><path fill="url(#SVGXymg2BWD)" class="laogbnbxu"/>`,
		"fallback": "selfhst:haptic",
	});
}

export default Component;
