import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yocg4b9gh.css';
import '../../css/r/rszhcwail.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="yocg4b9gh"/><path class="rszhcwail"/></g>`,
		"fallback": "streamline:computer-desktop-screen-device-display-computer-desktop-electronics-monitor-keyboard",
	});
}

export default Component;
