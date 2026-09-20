import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjc1yrwkr.css';
import '../../css/c/c3z_45b8m.css';
import '../../css/d/d0y6_cbgl.css';
import '../../css/q/qjtzoyv6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjc1yrwkr"/><path class="c3z_45b8m"/><path class="d0y6_cbgl"/><path class="qjtzoyv6f"/></g>`,
		"fallback": "streamline-cyber-color:camera-night",
	});
}

export default Component;
