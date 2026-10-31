import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/b4l4yrh0q.css';
import '../../css/q/q8zwtqbbl.css';
import '../../css/v/vj2nfz6bi.css';
import '../../css/m/m1gss4_3x.css';
import '../../css/w/wd2k5bb8p.css';
import '../../css/r/rzw_wl_9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="b4l4yrh0q wm-shadow"/><path class="q8zwtqbbl"/><path class="vj2nfz6bi"/><path class="m1gss4_3x"/><path class="wd2k5bb8p"/><path class="rzw_wl_9x"/></g>`,
		"fallback": "withicons-retro:file-up",
	});
}

export default Component;
