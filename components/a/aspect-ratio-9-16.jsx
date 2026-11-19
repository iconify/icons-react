import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbqwi2bvu.css';
import '../../css/y/yf-dpsb7n.css';
import '../../css/y/yn2rupbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hbqwi2bvu"/><path class="yf-dpsb7n"/><path class="yn2rupbkb"/></g>`,
		"fallback": "andrsrxn:aspect-ratio-9-16",
	});
}

export default Component;
