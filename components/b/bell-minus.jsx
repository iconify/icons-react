import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/ub-15th-l.css';
import '../../css/j/jfc6p_8ce.css';
import '../../css/e/efautybtv.css';
import '../../css/z/z2zjn2g3t.css';
import '../../css/a/aa9o_6hgj.css';
import '../../css/r/rercuebrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ub-15th-l wm-shadow"/><path class="jfc6p_8ce"/><path class="efautybtv"/><path class="z2zjn2g3t"/><path class="aa9o_6hgj"/><path class="rercuebrv wm-s"/></g>`,
		"fallback": "withicons-retro:bell-minus",
	});
}

export default Component;
