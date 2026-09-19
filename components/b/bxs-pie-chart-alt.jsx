import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skm4p0brp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skm4p0brp"/>`,
		"fallback": "bx:bxs-pie-chart-alt",
	});
}

export default Component;
