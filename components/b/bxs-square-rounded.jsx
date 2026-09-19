import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoqjnv0mi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoqjnv0mi"/>`,
		"fallback": "bx:bxs-square-rounded",
	});
}

export default Component;
