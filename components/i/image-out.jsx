import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jojtj8btu.css';
import '../../css/o/oclq4eb7v.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jojtj8btu"/><path class="oclq4eb7v"/><path class="zapwtgb_o"/></g>`,
		"fallback": "andrsrxn:image-out",
	});
}

export default Component;
