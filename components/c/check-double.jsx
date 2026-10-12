import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nz8yb6bgn.css';
import '../../css/h/huw3i8bmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nz8yb6bgn"/><path class="huw3i8bmh"/></g>`,
		"fallback": "andrsrxn:check-double",
	});
}

export default Component;
