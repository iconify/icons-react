import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6h1pk2wx.css';
import '../../css/k/kj5yxug5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6h1pk2wx"/><path class="kj5yxug5q"/>`,
		"fallback": "bx:camera-off",
	});
}

export default Component;
