import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee0-kbbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee0-kbbnr"/>`,
		"fallback": "mingcute:equal-not-fill",
	});
}

export default Component;
