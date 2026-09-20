import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkfzrdcoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkfzrdcoa"/>`,
		"fallback": "mingcute:fried-egg-fill",
	});
}

export default Component;
