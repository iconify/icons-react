import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzzlmdb7m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzzlmdb7m"/>`,
		"fallback": "streamline:computer-screen-curve-screen-curved-device-electronics-monitor-diplay-computer",
	});
}

export default Component;
