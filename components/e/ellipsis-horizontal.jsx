import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wswh81j3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wswh81j3z"/>`,
		"fallback": "heroicons-outline:ellipsis-horizontal",
	});
}

export default Component;
