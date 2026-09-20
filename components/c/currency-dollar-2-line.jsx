import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqf_41-ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqf_41-ht"/>`,
		"fallback": "mingcute:currency-dollar-2-line",
	});
}

export default Component;
