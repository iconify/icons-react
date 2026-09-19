import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_8o_25te.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_8o_25te"/>`,
		"fallback": "ant-design:column-height-outlined",
	});
}

export default Component;
