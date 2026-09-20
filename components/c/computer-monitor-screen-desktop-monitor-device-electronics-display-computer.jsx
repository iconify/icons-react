import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ezr9er75u.css';
import '../../css/f/f_de1-tnn.css';
import '../../css/a/a96cksb_s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ezr9er75u"/><rect class="f_de1-tnn"/><path class="a96cksb_s"/></g>`,
		"fallback": "streamline:computer-monitor-screen-desktop-monitor-device-electronics-display-computer",
	});
}

export default Component;
