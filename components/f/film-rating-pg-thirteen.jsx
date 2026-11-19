import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/y/y2mjsacdi.css';
import '../../css/h/hkaixnpod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="y2mjsacdi"/><path class="hkaixnpod"/></g>`,
		"fallback": "andrsrxn:film-rating-pg-thirteen",
	});
}

export default Component;
