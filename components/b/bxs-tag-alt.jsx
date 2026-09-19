import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7v4qmbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7v4qmbkn"/>`,
		"fallback": "bx:bxs-tag-alt",
	});
}

export default Component;
