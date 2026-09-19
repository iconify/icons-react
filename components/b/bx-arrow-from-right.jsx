import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs_00qnxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs_00qnxb"/>`,
		"fallback": "bx:bx-arrow-from-right",
	});
}

export default Component;
