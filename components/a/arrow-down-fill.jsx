import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io4t3absr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io4t3absr"/>`,
		"fallback": "mingcute:arrow-down-fill",
	});
}

export default Component;
