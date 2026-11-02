import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vacz3xbzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vacz3xbzm"/>`,
		"fallback": "mingcute:calendar-fold-line",
	});
}

export default Component;
