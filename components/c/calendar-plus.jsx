import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjt_1vbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjt_1vbhy"/>`,
		"fallback": "iconoir:calendar-plus",
	});
}

export default Component;
