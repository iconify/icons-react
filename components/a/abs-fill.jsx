import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp27x7h3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp27x7h3r"/>`,
		"fallback": "mingcute:abs-fill",
	});
}

export default Component;
