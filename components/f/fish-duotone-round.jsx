import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvya64bge.css';
import '../../css/k/kjfqpq08c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvya64bge"/><path class="kjfqpq08c"/></g>`,
		"fallback": "coolicons:fish-duotone-round",
	});
}

export default Component;
