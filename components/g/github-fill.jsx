import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oesj0egjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oesj0egjr"/>`,
		"fallback": "mingcute:github-fill",
	});
}

export default Component;
