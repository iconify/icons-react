import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikuu2tb7t.css';
import '../../css/i/i8j_yax_v.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ikuu2tb7t"/><path class="i8j_yax_v"/><path class="zapwtgb_o"/></g>`,
		"fallback": "andrsrxn:image-plus",
	});
}

export default Component;
