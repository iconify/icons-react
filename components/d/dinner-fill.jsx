import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4rj83b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4rj83b0l"/>`,
		"fallback": "mingcute:dinner-fill",
	});
}

export default Component;
