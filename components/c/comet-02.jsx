import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tue48hagb.css';
import '../../css/h/hz913ib_x.css';
import '../../css/o/o5mxm-bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tue48hagb"/><path class="hz913ib_x"/><path class="o5mxm-bli"/></g>`,
		"fallback": "hugeicons:comet-02",
	});
}

export default Component;
