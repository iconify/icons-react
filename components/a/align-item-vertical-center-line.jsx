import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da0ws9bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da0ws9bhi"/>`,
		"fallback": "ri:align-item-vertical-center-line",
	});
}

export default Component;
