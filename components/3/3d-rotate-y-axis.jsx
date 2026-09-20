import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/laj-3eauw.css';
import '../../css/d/dd632fbiz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="laj-3eauw"/><path class="dd632fbiz"/></g>`,
		"fallback": "streamline-flex:3d-rotate-y-axis",
	});
}

export default Component;
