import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sbx3_rbjb.css';
import '../../css/d/d7nccyb8k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="sbx3_rbjb"/><path class="d7nccyb8k"/></g>`,
		"fallback": "streamline:computer-mouse-wireless-remote-wireless-device-electronics-mouse-computer",
	});
}

export default Component;
