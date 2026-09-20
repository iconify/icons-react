import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izm1r3bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izm1r3bbr"/>`,
		"fallback": "mingcute:font-line",
	});
}

export default Component;
