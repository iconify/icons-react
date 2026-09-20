import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rmx2nbg8s.css';
import '../../css/v/vdy_02tyl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="rmx2nbg8s"/><path class="vdy_02tyl"/></g>`,
		"fallback": "streamline:computer-screen-2-screen-device-electronics-monitor-diplay-computer",
	});
}

export default Component;
