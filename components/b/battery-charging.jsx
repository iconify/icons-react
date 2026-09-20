import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7m23ib4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7m23ib4d"/>`,
		"fallback": "mynaui:battery-charging",
	});
}

export default Component;
