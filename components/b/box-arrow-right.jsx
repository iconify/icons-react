import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tzqslwopi.css';
import '../../css/s/suo_r-a_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="tzqslwopi"/><path class="suo_r-a_q"/></g>`,
		"fallback": "bi:box-arrow-right",
	});
}

export default Component;
