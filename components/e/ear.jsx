import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/p4b-8obnr.css';
import '../../css/t/tbbshccdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="p4b-8obnr"/><path class="tbbshccdj wm-a"/></g>`,
		"fallback": "withicons:ear",
	});
}

export default Component;
