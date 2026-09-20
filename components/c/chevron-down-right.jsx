import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hewnh0kei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hewnh0kei"/>`,
		"fallback": "mynaui:chevron-down-right",
	});
}

export default Component;
