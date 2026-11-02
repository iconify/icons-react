import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-u984bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-u984bnd"/>`,
		"fallback": "mingcute:chart-pie-line",
	});
}

export default Component;
