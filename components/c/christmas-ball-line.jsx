import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmtgx5unr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmtgx5unr"/>`,
		"fallback": "mingcute:christmas-ball-line",
	});
}

export default Component;
