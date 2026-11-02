import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/racmokb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="racmokb8w"/>`,
		"fallback": "mingcute:align-start-vertical-fill",
	});
}

export default Component;
