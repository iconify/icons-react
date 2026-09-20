import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eztzqucpf.css';
import '../../css/j/jbfiexkqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eztzqucpf"/><path class="jbfiexkqp"/></g>`,
		"fallback": "solar:cloud-bolt-minimalistic-bold",
	});
}

export default Component;
