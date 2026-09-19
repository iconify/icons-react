import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/o/ol0xvobbo.css';
import '../../css/k/k-1_yxb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ol0xvobbo"/><path class="k-1_yxb8a"/></g>`,
		"fallback": "humbleicons:corner-right-down",
	});
}

export default Component;
