import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-_jerb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-_jerb4p"/>`,
		"fallback": "eva:chevron-down-outline",
	});
}

export default Component;
