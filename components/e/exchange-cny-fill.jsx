import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk7nj-bqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk7nj-bqh"/>`,
		"fallback": "mingcute:exchange-cny-fill",
	});
}

export default Component;
