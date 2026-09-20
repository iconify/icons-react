import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/is3ab_1_x.css';
import '../../css/m/mxmb8ob8e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="is3ab_1_x"/><path class="mxmb8ob8e"/></g>`,
		"fallback": "streamline-flex:campfire",
	});
}

export default Component;
