import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz6xh3ccq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz6xh3ccq"/>`,
		"fallback": "mingcute:bookmark-fill",
	});
}

export default Component;
