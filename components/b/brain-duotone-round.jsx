import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ob4cnlbcc.css';
import '../../css/t/tyzrg8n9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ob4cnlbcc"/><path class="tyzrg8n9y"/></g>`,
		"fallback": "coolicons:brain-duotone-round",
	});
}

export default Component;
