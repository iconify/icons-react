import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqrr3e9vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqrr3e9vz"/>`,
		"fallback": "mingcute:chart-column-decreasing-fill",
	});
}

export default Component;
