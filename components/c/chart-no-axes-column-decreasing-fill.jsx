import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjgc4qb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjgc4qb_r"/>`,
		"fallback": "mingcute:chart-no-axes-column-decreasing-fill",
	});
}

export default Component;
