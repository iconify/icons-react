import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukaq_cb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukaq_cb7o"/>`,
		"fallback": "mingcute:arrow-right-up-circle-line",
	});
}

export default Component;
