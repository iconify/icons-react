import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc-8k5vsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc-8k5vsj"/>`,
		"fallback": "noviair-light:credit-card-info",
	});
}

export default Component;
