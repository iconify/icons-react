import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm-n10hqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm-n10hqp"/>`,
		"fallback": "mingcute:finger-victory-line",
	});
}

export default Component;
