import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxzv38bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxzv38bcs"/>`,
		"fallback": "mingcute:beachball-line",
	});
}

export default Component;
