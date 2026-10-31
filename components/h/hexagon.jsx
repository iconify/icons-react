import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u-mku9h3o.css';
import '../../css/n/nf8j83c8p.css';
import '../../css/r/rjkhg_e2i.css';
import '../../css/m/m3juav73q.css';
import '../../css/j/j7qiifiqw.css';
import '../../css/w/wjshshb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u-mku9h3o wm-shadow"/><path class="nf8j83c8p"/><path class="rjkhg_e2i"/><path class="m3juav73q"/><path class="j7qiifiqw"/><path class="wjshshb4d"/></g>`,
		"fallback": "withicons-retro:hexagon",
	});
}

export default Component;
