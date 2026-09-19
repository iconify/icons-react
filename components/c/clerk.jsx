import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wblo352dq.css';
import '../../css/a/afjkbrlmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b wblo352dq"/><path class="afjkbrlmd b"/>`,
		"fallback": "bxl:clerk",
	});
}

export default Component;
