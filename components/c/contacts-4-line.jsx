import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1w11pjgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1w11pjgr"/>`,
		"fallback": "mingcute:contacts-4-line",
	});
}

export default Component;
