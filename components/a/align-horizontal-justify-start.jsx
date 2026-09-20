import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q_7gqct_l.css';
import '../../css/y/yexbfbdhs.css';
import '../../css/f/fwgmdib4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="q_7gqct_l"/><rect class="yexbfbdhs"/><path class="fwgmdib4c"/></g>`,
		"fallback": "lucide:align-horizontal-justify-start",
	});
}

export default Component;
