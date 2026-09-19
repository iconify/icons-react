import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukax7ac-m.css';
import '../../css/t/t_0iy57rb.css';
import '../../css/h/hglao5bef.css';
import '../../css/v/vkjgd8s_y.css';
import '../../css/i/iiogbw5_t.css';
import '../../css/v/vy0cicrsa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ukax7ac-m"/><path class="t_0iy57rb"/><path class="hglao5bef"/><path class="vkjgd8s_y"/><path class="iiogbw5_t"/><path class="vy0cicrsa"/></g>`,
		"fallback": "fluent-emoji-flat:clamp",
	});
}

export default Component;
