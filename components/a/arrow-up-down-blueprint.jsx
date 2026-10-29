import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sqxgxfx8j.css';
import '../../css/o/o3ggb2czz.css';
import '../../css/o/oa8wtcqrr.css';
import '../../css/t/t-snm5blv.css';
import '../../css/l/l-9css3lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sqxgxfx8j wm-deco"/><path class="o3ggb2czz wm-deco"/><path class="oa8wtcqrr wm-k"/><path class="t-snm5blv wm-a"/><path class="l-9css3lp wm-k"/></g>`,
		"fallback": "withicons:arrow-up-down-blueprint",
	});
}

export default Component;
