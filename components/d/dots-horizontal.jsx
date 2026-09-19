import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpn7v4c7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpn7v4c7u"/>`,
		"fallback": "heroicons-outline:dots-horizontal",
	});
}

export default Component;
