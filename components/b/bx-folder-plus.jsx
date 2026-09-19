import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxxd9_b1b.css';
import '../../css/m/m8u4nj3lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxxd9_b1b"/><path class="m8u4nj3lr"/>`,
		"fallback": "bx:bx-folder-plus",
	});
}

export default Component;
