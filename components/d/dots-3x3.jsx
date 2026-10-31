import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8_9rfgus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8_9rfgus"/>`,
		"fallback": "sidekickicons:dots-3x3",
	});
}

export default Component;
