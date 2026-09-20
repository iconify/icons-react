import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj-82_nyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj-82_nyx"/>`,
		"fallback": "mynaui:arrow-down-left-circle-solid",
	});
}

export default Component;
