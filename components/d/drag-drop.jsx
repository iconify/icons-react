import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sqf5ujbom.css';
import '../../css/n/njfi41_5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sqf5ujbom"/><path clip-rule="evenodd" class="njfi41_5j"/></g>`,
		"fallback": "andrsrxn:drag-drop",
	});
}

export default Component;
