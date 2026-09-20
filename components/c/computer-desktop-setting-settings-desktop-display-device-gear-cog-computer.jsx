import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sw1nonbdz.css';
import '../../css/k/kp3xaqslt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sw1nonbdz"/><circle class="kp3xaqslt"/></g>`,
		"fallback": "streamline:computer-desktop-setting-settings-desktop-display-device-gear-cog-computer",
	});
}

export default Component;
