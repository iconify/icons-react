import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hurplfqkh.css';
import '../../css/s/s2-w90v_i.css';
import '../../css/e/eie0k96ry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hurplfqkh"/><path class="s2-w90v_i"/><path class="eie0k96ry"/></g>`,
		"fallback": "streamline-sharp:ai-vehicle-robot-1",
	});
}

export default Component;
