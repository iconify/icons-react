import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u63w3k6_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u63w3k6_x"/>`,
		"fallback": "mingcute:escalator-down-fill",
	});
}

export default Component;
