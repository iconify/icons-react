import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib8o1bb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib8o1bb8m"/>`,
		"fallback": "mynaui:arrow-up-right-circle-solid",
	});
}

export default Component;
