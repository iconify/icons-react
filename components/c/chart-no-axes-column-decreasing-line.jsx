import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qikfyukbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qikfyukbd"/>`,
		"fallback": "mingcute:chart-no-axes-column-decreasing-line",
	});
}

export default Component;
