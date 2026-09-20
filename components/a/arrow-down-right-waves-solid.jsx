import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1ooo089j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1ooo089j"/>`,
		"fallback": "mynaui:arrow-down-right-waves-solid",
	});
}

export default Component;
