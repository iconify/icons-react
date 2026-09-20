import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwvee8bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwvee8bmr"/>`,
		"fallback": "mynaui:credit-card-x",
	});
}

export default Component;
