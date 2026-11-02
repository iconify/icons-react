import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg5ua8opk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg5ua8opk"/>`,
		"fallback": "mingcute:circle-check-big-fill",
	});
}

export default Component;
