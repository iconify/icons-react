import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7bbisuaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b7bbisuaq"/>`,
		"fallback": "griddy-icons:arrow-circle-down-right",
	});
}

export default Component;
