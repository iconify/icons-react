import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/h/he4fcgu5i.css';
import '../../css/d/dovvelb6i.css';
import '../../css/h/hngl2kkqf.css';
import '../../css/k/kgu-avbrd.css';
import '../../css/l/lp_yokb4d.css';
import '../../css/y/y4i6kac8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGIu5gLeZJ" cx="74" cy="62.8" r="148.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="vc--wpv5i"/><stop offset=".85" class="he4fcgu5i"/><stop offset="1" class="he4fcgu5i"/></radialGradient></defs><path class="dovvelb6i"/><path fill="url(#SVGIu5gLeZJ)" transform="matrix(2.4 0 0 2.4 18.038 18.038)" class="hngl2kkqf"/><path class="kgu-avbrd"/><path class="lp_yokb4d"/><path class="y4i6kac8y"/>`,
		"fallback": "xero-emoji:fish-cake-with-swirl",
	});
}

export default Component;
