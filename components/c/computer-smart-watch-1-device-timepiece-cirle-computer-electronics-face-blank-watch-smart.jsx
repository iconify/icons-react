import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/ntpd7fc4k.css';
import '../../css/u/ue9vnkbdf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ntpd7fc4k"/><path class="ue9vnkbdf"/></g>`,
		"fallback": "streamline:computer-smart-watch-1-device-timepiece-cirle-computer-electronics-face-blank-watch-smart",
	});
}

export default Component;
