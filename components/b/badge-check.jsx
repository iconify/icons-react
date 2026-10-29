import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8itr8l-v.css';
import '../../css/x/xcz8ppb2a.css';
import '../../css/l/lr-jl9bio.css';
import '../../css/a/a4y5jtbyn.css';
import '../../css/r/rl151uk0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8itr8l-v wm-k"/><path class="wm-k xcz8ppb2a"/><path class="lr-jl9bio wm-k"/><path class="a4y5jtbyn wm-shine"/><path class="rl151uk0x wm-a"/></g>`,
		"fallback": "withicons-anime:badge-check",
	});
}

export default Component;
