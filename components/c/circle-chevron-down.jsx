import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/s/syapvgbdb.css';
import '../../css/k/k4yld286d.css';
import '../../css/d/dl81mmbfy.css';
import '../../css/x/x9x2k2-hi.css';
import '../../css/l/l13cnkb6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="syapvgbdb"/><path class="k4yld286d"/><path class="dl81mmbfy"/><path class="x9x2k2-hi"/><path class="l13cnkb6z"/></g>`,
		"fallback": "withicons-retro:circle-chevron-down",
	});
}

export default Component;
