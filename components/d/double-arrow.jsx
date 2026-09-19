import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5-1y4y0q.css';

const viewBox = {"width":312,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5-1y4y0q"/>`,
		"fallback": "ps:double-arrow",
	});
}

export default Component;
