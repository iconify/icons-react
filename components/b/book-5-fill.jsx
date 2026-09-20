import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6dtqwb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6dtqwb-w"/>`,
		"fallback": "mingcute:book-5-fill",
	});
}

export default Component;
