import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9mo2n3ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9mo2n3ab"/>`,
		"fallback": "mingcute:calendar-range-line",
	});
}

export default Component;
