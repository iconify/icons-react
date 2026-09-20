import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwj58vb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwj58vb_l"/>`,
		"fallback": "mingcute:chart-pie-3-fill",
	});
}

export default Component;
