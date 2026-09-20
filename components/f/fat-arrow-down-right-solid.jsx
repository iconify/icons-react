import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4qxexjsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4qxexjsm"/>`,
		"fallback": "mynaui:fat-arrow-down-right-solid",
	});
}

export default Component;
