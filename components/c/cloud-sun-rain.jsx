import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jmg13wbru.css';
import '../../css/b/bem2mjb-b.css';
import '../../css/v/valjopeza.css';
import '../../css/b/bpz3ipbwd.css';
import '../../css/p/pm7ea1b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jmg13wbru wm-shadow"/><path class="bem2mjb-b wm-shadow"/><path class="valjopeza"/><path class="bpz3ipbwd"/><path class="pm7ea1b_q wm-s"/></g>`,
		"fallback": "withicons-brutal:cloud-sun-rain",
	});
}

export default Component;
