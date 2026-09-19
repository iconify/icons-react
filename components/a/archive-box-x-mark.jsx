import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-_ib7i3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-_ib7i3l"/>`,
		"fallback": "heroicons-outline:archive-box-x-mark",
	});
}

export default Component;
