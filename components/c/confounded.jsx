import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phtqsc2go.css';
import '../../css/h/hh77phbau.css';
import '../../css/i/iq95bwszw.css';
import '../../css/m/mj8rt0bqp.css';
import '../../css/a/a2pvu-bym.css';
import '../../css/o/owdsu4box.css';
import '../../css/m/map-g3fmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phtqsc2go"/><path class="hh77phbau"/><path class="iq95bwszw"/><path class="mj8rt0bqp"/><path class="a2pvu-bym"/><path class="owdsu4box"/><path class="map-g3fmi"/>`,
		"fallback": "fxemoji:confounded",
	});
}

export default Component;
