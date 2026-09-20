import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv-oe6gwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv-oe6gwy"/>`,
		"fallback": "mynaui:chevron-right-square-solid",
	});
}

export default Component;
