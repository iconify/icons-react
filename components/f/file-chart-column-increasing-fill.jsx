import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbs7r8msg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbs7r8msg"/>`,
		"fallback": "mingcute:file-chart-column-increasing-fill",
	});
}

export default Component;
