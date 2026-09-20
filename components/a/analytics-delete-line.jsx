import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oru5bnb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oru5bnb6j"/>`,
		"fallback": "majesticons:analytics-delete-line",
	});
}

export default Component;
