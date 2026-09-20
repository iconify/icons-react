import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9j5j9wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in9j5j9wp"/>`,
		"fallback": "mynaui:chevron-up-right-solid",
	});
}

export default Component;
