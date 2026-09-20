import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kep3_b_du.css';
import '../../css/i/idc1s4_bi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kep3_b_du"/><circle class="idc1s4_bi"/></g>`,
		"fallback": "streamline:computer-desktop-warning-alert-desktop-display-device-warning-notification-computer",
	});
}

export default Component;
