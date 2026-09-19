import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ose1jpb8n.css';
import '../../css/h/hfzh1ebhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ose1jpb8n"/><path class="hfzh1ebhh"/>`,
		"fallback": "bx:badge-check",
	});
}

export default Component;
