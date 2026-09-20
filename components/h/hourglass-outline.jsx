import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq0w_7b_q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq0w_7b_q"/>`,
		"fallback": "teenyicons:hourglass-outline",
	});
}

export default Component;
