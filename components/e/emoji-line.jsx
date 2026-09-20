import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmizg-b1r.css';
import '../../css/z/zc4wqgbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmizg-b1r"/><path class="zc4wqgbbz"/>`,
		"fallback": "mingcute:emoji-line",
	});
}

export default Component;
