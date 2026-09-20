import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx7-hobba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx7-hobba"/>`,
		"fallback": "mynaui:heart-check-solid",
	});
}

export default Component;
