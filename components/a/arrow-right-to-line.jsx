import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h72aojo8n.css';
import '../../css/j/j99-qubyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h72aojo8n"/><path class="j99-qubyi"/></g>`,
		"fallback": "hugeicons:arrow-right-to-line",
	});
}

export default Component;
