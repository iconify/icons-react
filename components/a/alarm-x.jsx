import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcq7k6bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcq7k6bmj"/>`,
		"fallback": "mynaui:alarm-x",
	});
}

export default Component;
