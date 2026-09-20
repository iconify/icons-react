import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmzra2-rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmzra2-rc"/>`,
		"fallback": "mynaui:dice-two-solid",
	});
}

export default Component;
