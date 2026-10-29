import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xxlh0q_3s.css';
import '../../css/q/q3tb4jbhj.css';
import '../../css/n/nyughr31e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xxlh0q_3s"/><path class="q3tb4jbhj wm-a"/><path class="nyughr31e wm-s"/></g>`,
		"fallback": "withicons:cloud-sun-rain-solid",
	});
}

export default Component;
