import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ex-7uccti.css';
import '../../css/m/mikouibnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ex-7uccti"/><path class="mikouibnu wm-a"/></g>`,
		"fallback": "withicons:credit-card",
	});
}

export default Component;
