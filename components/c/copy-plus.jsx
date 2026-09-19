import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr1lh7bho.css';
import '../../css/y/yp-o87trv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr1lh7bho"/><path class="yp-o87trv"/>`,
		"fallback": "boxicons:copy-plus",
	});
}

export default Component;
