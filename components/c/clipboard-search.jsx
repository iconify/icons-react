import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qcn41y1ce.css';
import '../../css/g/gpmqu7b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qcn41y1ce"/><path class="gpmqu7b2d"/></g>`,
		"fallback": "andrsrxn:clipboard-search",
	});
}

export default Component;
