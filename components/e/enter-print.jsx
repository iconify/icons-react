import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw_32pbvj.css';
import '../../css/v/vh8cdubgk.css';
import '../../css/e/ewja4-1ua.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jw_32pbvj"/><path clip-rule="evenodd" class="vh8cdubgk"/><path class="ewja4-1ua"/></g>`,
		"fallback": "pepicons:enter-print",
	});
}

export default Component;
