import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fpdd2ab7l.css';
import '../../css/z/zl8syfbae.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/h/hbi8hhkfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fpdd2ab7l"/><path class="wm-a zl8syfbae"/><path class="yw4fz_b6b"/><path class="hbi8hhkfx"/></g>`,
		"fallback": "withicons:donut-duo",
	});
}

export default Component;
