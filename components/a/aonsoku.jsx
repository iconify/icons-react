import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onydrabxj.css';
import '../../css/m/myl02k85s.css';
import '../../css/k/ky75kbc2o.css';
import '../../css/g/g_nkod9aq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGCRCX7dbh" cx="-50.189" cy="652.188" r=".621" gradientTransform="matrix(82400 0 0 -82400 4161172 53765872)" gradientUnits="userSpaceOnUse"><stop offset=".655" class="onydrabxj"/><stop offset="1" class="myl02k85s"/></radialGradient><path fill="url(#SVGCRCX7dbh)" class="ky75kbc2o"/><path class="g_nkod9aq"/>`,
		"fallback": "selfhst:aonsoku",
	});
}

export default Component;
