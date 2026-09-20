import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9ouh7i8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9ouh7i8w"/>`,
		"fallback": "mdi:credit-card-lock-outline",
	});
}

export default Component;
