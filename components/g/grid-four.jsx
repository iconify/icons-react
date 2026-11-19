import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_eckfvmo.css';
import '../../css/h/htx_t_bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w_eckfvmo"/><path class="htx_t_bil"/></g>`,
		"fallback": "andrsrxn:grid-four",
	});
}

export default Component;
