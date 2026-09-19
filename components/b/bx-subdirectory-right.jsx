import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywe5bx4-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywe5bx4-u"/>`,
		"fallback": "bx:bx-subdirectory-right",
	});
}

export default Component;
