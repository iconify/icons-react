import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ac3zf5k8h.css';
import '../../css/n/ntpd7fc4k.css';
import '../../css/c/cq971jbmr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ac3zf5k8h"/><circle class="ntpd7fc4k"/><circle class="cq971jbmr"/></g>`,
		"fallback": "streamline:entertainment-speaker-1-speaker-music-audio-subwoofer",
	});
}

export default Component;
