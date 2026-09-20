import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0g_cn3lg.css';
import '../../css/w/waeg4lbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0g_cn3lg"/><path class="waeg4lbhw"/>`,
		"fallback": "token:df",
	});
}

export default Component;
