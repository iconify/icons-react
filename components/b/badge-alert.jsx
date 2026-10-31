import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zc3svkblt.css';
import '../../css/j/jyqhx8fnd.css';
import '../../css/e/et17t6bin.css';
import '../../css/n/nymbqgapg.css';
import '../../css/s/s2pgaqb_e.css';
import '../../css/v/v4f96ab1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zc3svkblt"/><path class="jyqhx8fnd"/><path class="et17t6bin"/><path class="nymbqgapg"/><path class="s2pgaqb_e"/><path class="v4f96ab1l"/></g>`,
		"fallback": "withicons-retro:badge-alert",
	});
}

export default Component;
