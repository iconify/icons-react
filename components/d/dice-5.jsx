import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ek2a0fbsk.css';
import '../../css/y/yivttkrvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ek2a0fbsk"/><path class="yivttkrvg"/></g>`,
		"fallback": "streamline-flex:dice-5",
	});
}

export default Component;
