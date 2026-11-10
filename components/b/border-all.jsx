import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_eckfvmo.css';
import '../../css/l/leptgibuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_eckfvmo"/><path class="leptgibuw"/></g>`,
		"fallback": "andrsrxn:border-all",
	});
}

export default Component;
