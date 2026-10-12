import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvjyl1y0k.css';
import '../../css/k/kh00onb1d.css';
import '../../css/n/ns0iphb9l.css';
import '../../css/k/k64spkeqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvjyl1y0k"/><path class="kh00onb1d"/><path class="ns0iphb9l"/><path class="k64spkeqe"/></g>`,
		"fallback": "andrsrxn:chair-gaming",
	});
}

export default Component;
