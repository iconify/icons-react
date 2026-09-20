import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e42s7434d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e42s7434d"/>`,
		"fallback": "mdi:book-outline",
	});
}

export default Component;
