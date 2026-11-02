import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1f3nzjrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1f3nzjrp"/>`,
		"fallback": "mingcute:danmaku-fill",
	});
}

export default Component;
