import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d5kv-1gyk.css';
import '../../css/k/kl56jmaqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d5kv-1gyk"/><path class="kl56jmaqc wm-a"/></g>`,
		"fallback": "withicons:balloon",
	});
}

export default Component;
