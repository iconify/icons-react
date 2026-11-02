import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q28vt0hbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q28vt0hbh"/>`,
		"fallback": "mingcute:croissant-fill",
	});
}

export default Component;
