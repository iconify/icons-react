import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x47yvzn3t.css';
import '../../css/q/qg3w4ub8c.css';
import '../../css/k/ko8i97bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x47yvzn3t"/><path class="qg3w4ub8c"/><path class="ko8i97bky"/></g>`,
		"fallback": "streamline-ultimate-color:cursor-target-1",
	});
}

export default Component;
