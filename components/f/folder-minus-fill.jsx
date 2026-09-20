import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7rakhg5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7rakhg5e"/>`,
		"fallback": "mage:folder-minus-fill",
	});
}

export default Component;
