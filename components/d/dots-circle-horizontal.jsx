import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4u4i6t9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4u4i6t9z"/>`,
		"fallback": "tabler:dots-circle-horizontal",
	});
}

export default Component;
