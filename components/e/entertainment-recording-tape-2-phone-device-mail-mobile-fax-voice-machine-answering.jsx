import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ucsug7a9v.css';
import '../../css/o/o3jp4gbln.css';
import '../../css/q/q0nz_6bfb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ucsug7a9v"/><circle class="o3jp4gbln"/><path class="q0nz_6bfb"/></g>`,
		"fallback": "streamline:entertainment-recording-tape-2-phone-device-mail-mobile-fax-voice-machine-answering",
	});
}

export default Component;
