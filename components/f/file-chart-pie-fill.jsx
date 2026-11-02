import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u74c4ybvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u74c4ybvv"/>`,
		"fallback": "mingcute:file-chart-pie-fill",
	});
}

export default Component;
