import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa-lzd6aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa-lzd6aw"/>`,
		"fallback": "mingcute:black-board-fill",
	});
}

export default Component;
