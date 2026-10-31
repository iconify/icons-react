import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hf4plfbxb.css';
import '../../css/l/l2kvl2z_z.css';
import '../../css/j/jw9pf1buz.css';
import '../../css/r/rnr71vbjq.css';
import '../../css/m/m0neh_prb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hf4plfbxb wm-shadow"/><path class="l2kvl2z_z"/><path class="jw9pf1buz"/><path class="rnr71vbjq"/><path class="m0neh_prb"/></g>`,
		"fallback": "withicons-retro:calculator",
	});
}

export default Component;
