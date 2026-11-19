import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s7mm6czqp.css';
import '../../css/j/jdc5zqbyv.css';
import '../../css/p/p6iymhhgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s7mm6czqp"/><path class="jdc5zqbyv"/><path class="p6iymhhgt"/></g>`,
		"fallback": "andrsrxn:file-star",
	});
}

export default Component;
