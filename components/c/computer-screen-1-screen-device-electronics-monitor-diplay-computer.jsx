import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c35mn0b7c.css';
import '../../css/y/ys1244b5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="c35mn0b7c"/><path class="ys1244b5p"/></g>`,
		"fallback": "streamline:computer-screen-1-screen-device-electronics-monitor-diplay-computer",
	});
}

export default Component;
