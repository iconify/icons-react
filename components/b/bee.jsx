import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ymi3ltbwu.css';
import '../../css/j/jaup11bov.css';
import '../../css/l/lx3mrzbpn.css';
import '../../css/y/yfyne3ixv.css';
import '../../css/u/u8v1tfbvx.css';
import '../../css/y/yvkzbhbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow ymi3ltbwu"/><path class="jaup11bov"/><path class="lx3mrzbpn"/><path class="yfyne3ixv"/><path class="u8v1tfbvx"/><path class="yvkzbhbbs"/></g>`,
		"fallback": "withicons-retro:bee",
	});
}

export default Component;
