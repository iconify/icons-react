import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klq-qzb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klq-qzb9i"/>`,
		"fallback": "mdi:filter-menu",
	});
}

export default Component;
