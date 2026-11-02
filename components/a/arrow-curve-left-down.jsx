import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6yhym3bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6yhym3bm"/>`,
		"fallback": "sidekickicons:arrow-curve-left-down",
	});
}

export default Component;
