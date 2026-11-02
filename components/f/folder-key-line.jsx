import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqn0q7xpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqn0q7xpz"/>`,
		"fallback": "mingcute:folder-key-line",
	});
}

export default Component;
