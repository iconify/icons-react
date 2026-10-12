import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w64ql4i5q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w64ql4i5q"/>`,
		"fallback": "garden:header-3-20",
	});
}

export default Component;
