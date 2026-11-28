import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbwv8vb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbwv8vb6q"/>`,
		"fallback": "iconaut:chevron-right-square-solid",
	});
}

export default Component;
