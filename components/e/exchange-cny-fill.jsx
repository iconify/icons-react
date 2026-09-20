import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h36zf1bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h36zf1bkd"/>`,
		"fallback": "ri:exchange-cny-fill",
	});
}

export default Component;
