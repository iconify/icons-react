import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw8lq1w4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw8lq1w4y"/>`,
		"fallback": "thesvg-color:easyjet",
	});
}

export default Component;
