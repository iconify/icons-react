import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6z_-_78z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6z_-_78z"/>`,
		"fallback": "mingcute:chevron-last-line",
	});
}

export default Component;
