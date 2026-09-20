import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ipnathbvl.css';
import '../../css/b/by4nclejk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ipnathbvl"/><path class="by4nclejk"/></g>`,
		"fallback": "streamline:desktop-game",
	});
}

export default Component;
