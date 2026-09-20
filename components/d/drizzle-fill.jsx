import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4ny07b_a.css';
import '../../css/s/s0er2727y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4ny07b_a"/><path class="s0er2727y"/>`,
		"fallback": "mingcute:drizzle-fill",
	});
}

export default Component;
