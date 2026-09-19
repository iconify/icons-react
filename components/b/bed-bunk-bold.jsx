import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j3otp5bhd.css';
import '../../css/m/mli9f47jk.css';
import '../../css/c/cbfyi1blz.css';
import '../../css/e/em_t-ebtw.css';
import '../../css/c/cwbehnbmu.css';
import '../../css/e/etzxpsben.css';
import '../../css/g/g3bpael9c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j3otp5bhd"/><path class="mli9f47jk"/><path class="cbfyi1blz"/><path class="em_t-ebtw"/><path class="cwbehnbmu"/><path class="etzxpsben"/><path class="g3bpael9c"/></g>`,
		"fallback": "glyphs:bed-bunk-bold",
	});
}

export default Component;
