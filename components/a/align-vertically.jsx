import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzjem1b0t.css';
import '../../css/i/i0cx1hkrq.css';
import '../../css/y/yr7gh2baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 3.67 8.88)" class="uzjem1b0t"/><rect transform="matrix(0 1 1 0 3.67 8.88)" class="i0cx1hkrq"/><path class="yr7gh2baf"/></g>`,
		"fallback": "andrsrxn:align-vertically",
	});
}

export default Component;
