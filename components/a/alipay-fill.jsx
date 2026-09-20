import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqf-js7hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqf-js7hl"/>`,
		"fallback": "mingcute:alipay-fill",
	});
}

export default Component;
