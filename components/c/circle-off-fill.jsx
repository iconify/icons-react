import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqizbxw7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqizbxw7e"/>`,
		"fallback": "mingcute:circle-off-fill",
	});
}

export default Component;
