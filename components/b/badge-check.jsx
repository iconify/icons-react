import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/q/qlt110b9c.css';
import '../../css/n/niokrmbit.css';
import '../../css/l/lhzl5obtm.css';
import '../../css/s/s2pgaqb_e.css';
import '../../css/j/jyj-yylot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="qlt110b9c"/><path class="niokrmbit"/><path class="lhzl5obtm"/><path class="s2pgaqb_e"/><path class="jyj-yylot"/></g>`,
		"fallback": "withicons-retro:badge-check",
	});
}

export default Component;
