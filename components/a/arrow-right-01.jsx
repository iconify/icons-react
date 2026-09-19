import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enuqh9v5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enuqh9v5o"/>`,
		"fallback": "hugeicons:arrow-right-01",
	});
}

export default Component;
