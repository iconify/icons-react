import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q1dc64bou.css';
import '../../css/m/mf0uu2_xj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q1dc64bou"/><path class="mf0uu2_xj"/></g>`,
		"fallback": "streamline:business-card",
	});
}

export default Component;
