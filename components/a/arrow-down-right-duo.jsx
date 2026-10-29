import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ouu4wvpmp.css';
import '../../css/y/y5lva8w-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ouu4wvpmp"/><path class="wm-a y5lva8w-b"/></g>`,
		"fallback": "withicons:arrow-down-right-duo",
	});
}

export default Component;
