import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejmxj6bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejmxj6bhn"/>`,
		"fallback": "mingcute:book-check-fill",
	});
}

export default Component;
