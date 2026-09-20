import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/a1g_vebev.css';
import '../../css/o/ociq7vfhz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="a1g_vebev"/><path class="ociq7vfhz"/></g>`,
		"fallback": "streamline:browser-wifi",
	});
}

export default Component;
