import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdntu4bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdntu4bcl"/>`,
		"fallback": "mingcute:chart-no-axes-column-increasing-fill",
	});
}

export default Component;
