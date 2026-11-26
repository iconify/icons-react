import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru36gnb2i.css';
import '../../css/g/gdp-lpbgi.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/s/smxbh-b5r.css';
import '../../css/n/nk138_b6c.css';
import '../../css/y/yuwyb1bhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGTfYGNdfi" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="ru36gnb2i"/><stop offset=".85" class="gdp-lpbgi"/><stop offset="1" class="gdp-lpbgi"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGTfYGNdfi)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="smxbh-b5r"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`,
		"fallback": "xero-emoji:blue-circle",
	});
}

export default Component;
