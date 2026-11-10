import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxgv4xzaf.css';
import '../../css/m/myx3wdboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bxgv4xzaf"/><path class="myx3wdboh"/></g>`,
		"fallback": "andrsrxn:flag",
	});
}

export default Component;
