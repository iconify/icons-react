import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kiab1zb2y.css';
import '../../css/o/oc52qlt0m.css';
import '../../css/d/dad0rbcyz.css';
import '../../css/r/r81-4itjw.css';
import '../../css/w/wg9ivs4_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kiab1zb2y wm-shadow"/><path class="oc52qlt0m"/><path class="dad0rbcyz"/><path class="r81-4itjw"/><path class="wg9ivs4_y"/></g>`,
		"fallback": "withicons-retro:cloud-fog",
	});
}

export default Component;
