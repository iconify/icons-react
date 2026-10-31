import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xv4i7e3qg.css';
import '../../css/c/cp0wzmuzu.css';
import '../../css/h/hj57o6hov.css';
import '../../css/e/e9c2htbyt.css';
import '../../css/a/a1ttyubes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow xv4i7e3qg"/><path class="cp0wzmuzu"/><path class="hj57o6hov"/><path class="e9c2htbyt"/><path class="a1ttyubes"/></g>`,
		"fallback": "withicons-retro:chart-gantt",
	});
}

export default Component;
