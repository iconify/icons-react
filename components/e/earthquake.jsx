import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsf0c4bdz.css';
import '../../css/c/c1bp9hbqi.css';
import '../../css/h/h0epgfb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsf0c4bdz"/><path class="c1bp9hbqi"/><path class="h0epgfb3b"/></g>`,
		"fallback": "andrsrxn:earthquake",
	});
}

export default Component;
