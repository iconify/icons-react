import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkrd5vafu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkrd5vafu"/>`,
		"fallback": "ri:contacts-book-line",
	});
}

export default Component;
