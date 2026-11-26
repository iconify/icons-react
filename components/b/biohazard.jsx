import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvc_x47if.css';
import '../../css/w/wa58v4vsb.css';
import '../../css/q/qaq-xul5x.css';
import '../../css/f/f4bt58bzj.css';
import '../../css/z/z0j0oebmh.css';
import '../../css/n/ndqh8ryvu.css';
import '../../css/h/hr85o7hvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGGSetwc4l" cx="75.9" cy="100" r="137.6" gradientUnits="userSpaceOnUse"><stop offset="0" class="vvc_x47if"/><stop offset=".85" class="wa58v4vsb"/><stop offset="1" class="wa58v4vsb"/></radialGradient></defs><path class="qaq-xul5x"/><path fill="url(#SVGGSetwc4l)" transform="matrix(2.8 0 0 2.8 -21.492 -21.492)" class="f4bt58bzj"/><path class="z0j0oebmh"/><path class="ndqh8ryvu"/><path class="hr85o7hvc"/>`,
		"fallback": "xero-emoji:biohazard",
	});
}

export default Component;
