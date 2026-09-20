import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvt5iabui.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvt5iabui"/>`,
		"fallback": "memory:arrow-down-right-box",
	});
}

export default Component;
