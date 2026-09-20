import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c35mn0b7c.css';
import '../../css/v/vew8bobyy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="c35mn0b7c"/><path class="vew8bobyy"/></g>`,
		"fallback": "streamline:computer-desktop-check-success-approve-device-display-desktop-computer",
	});
}

export default Component;
