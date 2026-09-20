import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nosvytbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nosvytbxi"/>`,
		"fallback": "simple-icons:googletagmanager",
	});
}

export default Component;
