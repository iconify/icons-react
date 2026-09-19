import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nutj0lbex.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nutj0lbex"/>`,
		"fallback": "dinkie-icons:closed-book-small-filled",
	});
}

export default Component;
