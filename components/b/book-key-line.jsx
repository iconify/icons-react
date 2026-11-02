import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icjv8bckw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icjv8bckw"/>`,
		"fallback": "mingcute:book-key-line",
	});
}

export default Component;
