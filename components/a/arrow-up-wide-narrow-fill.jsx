import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx1g2ub7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx1g2ub7x"/>`,
		"fallback": "mingcute:arrow-up-wide-narrow-fill",
	});
}

export default Component;
