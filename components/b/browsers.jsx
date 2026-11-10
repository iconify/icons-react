import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o9imlrehb.css';
import '../../css/j/j4jvv7bkc.css';
import '../../css/f/f4_op1bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o9imlrehb"/><path class="j4jvv7bkc"/><path class="f4_op1bij"/></g>`,
		"fallback": "andrsrxn:browsers",
	});
}

export default Component;
