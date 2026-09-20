import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbcc51ung.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbcc51ung"/>`,
		"fallback": "mdi:chevron-left-box",
	});
}

export default Component;
