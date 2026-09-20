import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh7vy4bqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh7vy4bqk"/>`,
		"fallback": "mingcute:hand-card-line",
	});
}

export default Component;
