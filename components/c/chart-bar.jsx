import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uylaye4tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uylaye4tc"/>`,
		"fallback": "mynaui:chart-bar",
	});
}

export default Component;
