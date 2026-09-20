import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb-s0g_vo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb-s0g_vo"/>`,
		"fallback": "mingcute:delete-2-line",
	});
}

export default Component;
