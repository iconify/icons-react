import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss97z95ca.css';
import '../../css/s/s81emhi4y.css';
import '../../css/l/leaprwbco.css';
import '../../css/w/w9smw2han.css';
import '../../css/j/jh7co2bub.css';
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
		"content": `<defs><radialGradient id="SVGz537XkhL" cx="77.6" cy="100" r="128" gradientUnits="userSpaceOnUse"><stop offset="0" class="ss97z95ca"/><stop offset=".85" class="s81emhi4y"/><stop offset="1" class="s81emhi4y"/></radialGradient></defs><path class="leaprwbco"/><path fill="url(#SVGz537XkhL)" transform="matrix(2.8 0 0 2.8 -28.016 -28.016)" class="w9smw2han"/><path class="jh7co2bub"/><path class="nk138_b6c"/><path class="yuwyb1bhw"/>`,
		"fallback": "xero-emoji:brown-circle",
	});
}

export default Component;
