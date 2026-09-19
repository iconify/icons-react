import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y92d3wn_q.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y92d3wn_q"/><path class="ykzxdyblb"/></g>`,
		"fallback": "hugeicons:file-chart-line",
	});
}

export default Component;
