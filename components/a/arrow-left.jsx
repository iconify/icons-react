import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fju_9nb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fju_9nb9d"/>`,
		"fallback": "mynaui:arrow-left",
	});
}

export default Component;
