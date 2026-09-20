import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru9wcp0zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru9wcp0zh"/>`,
		"fallback": "mdi:humidity-alert",
	});
}

export default Component;
