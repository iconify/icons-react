import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc4c1dbcn.css';
import '../../css/l/lem5jbczh.css';
import '../../css/u/uzbb7yy_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hc4c1dbcn"/><path class="lem5jbczh"/><path class="uzbb7yy_e"/></g>`,
		"fallback": "lucide:citrus",
	});
}

export default Component;
