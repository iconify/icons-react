import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en4jbhc4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en4jbhc4w"/>`,
		"fallback": "hugeicons:dim-sum-01",
	});
}

export default Component;
