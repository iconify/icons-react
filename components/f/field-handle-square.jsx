import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxa2e8arp.css';
import '../../css/o/o12q2nbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nxa2e8arp"/><path class="o12q2nbmr"/></g>`,
		"fallback": "andrsrxn:field-handle-square",
	});
}

export default Component;
