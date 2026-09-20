import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cngf7ij4e.css';
import '../../css/v/vhxtxtbwm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cngf7ij4e"/><path class="vhxtxtbwm"/></g>`,
		"fallback": "streamline:city-hall",
	});
}

export default Component;
