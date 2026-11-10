import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rl95-cc6l.css';
import '../../css/d/d87l1693f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rl95-cc6l"/><path class="d87l1693f"/></g>`,
		"fallback": "andrsrxn:filter",
	});
}

export default Component;
