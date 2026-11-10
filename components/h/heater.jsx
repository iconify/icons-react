import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zz2nhvbwp.css';
import '../../css/k/k1_exib9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zz2nhvbwp"/><path class="k1_exib9q"/></g>`,
		"fallback": "andrsrxn:heater",
	});
}

export default Component;
