import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yd-dsbbau.css';
import '../../css/m/mt37fdc8f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yd-dsbbau"/><path class="mt37fdc8f"/></g>`,
		"fallback": "streamline:graduation-cap",
	});
}

export default Component;
