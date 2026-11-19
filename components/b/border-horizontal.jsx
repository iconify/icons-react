import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/temtx9hjb.css';
import '../../css/i/i53osdbak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="temtx9hjb"/><path class="i53osdbak"/></g>`,
		"fallback": "andrsrxn:border-horizontal",
	});
}

export default Component;
