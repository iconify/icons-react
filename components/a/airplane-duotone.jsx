import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4cq3vwgd.css';
import '../../css/j/jubmfqrov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o4cq3vwgd"/><path class="jubmfqrov"/></g>`,
		"fallback": "si:airplane-duotone",
	});
}

export default Component;
