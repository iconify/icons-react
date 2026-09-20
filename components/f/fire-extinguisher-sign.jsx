import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mrp1bt_1k.css';
import '../../css/k/k9bpmbcww.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mrp1bt_1k"/><path class="k9bpmbcww"/></g>`,
		"fallback": "streamline:fire-extinguisher-sign",
	});
}

export default Component;
