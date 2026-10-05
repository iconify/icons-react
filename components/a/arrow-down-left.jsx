import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/ehk3d3buk.css';
import '../../css/s/s_t1z1bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ehk3d3buk"/><path class="s_t1z1bbd"/></g>`,
		"fallback": "matita:arrow-down-left",
	});
}

export default Component;
