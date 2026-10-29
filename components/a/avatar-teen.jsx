import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yr9-fbbjj.css';
import '../../css/q/qluslacga.css';
import '../../css/v/vj60u97vd.css';
import '../../css/p/px00y_byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yr9-fbbjj"/><path class="qluslacga"/><path class="vj60u97vd wm-a"/><path class="px00y_byw wm-a"/></g>`,
		"fallback": "withicons:avatar-teen",
	});
}

export default Component;
