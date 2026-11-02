import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk2o1b0nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk2o1b0nr"/>`,
		"fallback": "mingcute:display-line",
	});
}

export default Component;
