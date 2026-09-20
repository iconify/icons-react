import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pcphqf2zf.css';
import '../../css/g/g840b1b6h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pcphqf2zf"/><path class="g840b1b6h"/></g>`,
		"fallback": "streamline-flex:desktop-screensaver-sleep",
	});
}

export default Component;
