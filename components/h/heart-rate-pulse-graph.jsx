import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xiwxmsbza.css';
import '../../css/e/evlzrsl2t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xiwxmsbza"/><path class="evlzrsl2t"/></g>`,
		"fallback": "streamline:heart-rate-pulse-graph",
	});
}

export default Component;
