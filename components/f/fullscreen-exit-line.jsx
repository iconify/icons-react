import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhzurs3ve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhzurs3ve"/>`,
		"fallback": "mingcute:fullscreen-exit-line",
	});
}

export default Component;
