import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuzsm0beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuzsm0beb"/>`,
		"fallback": "mynaui:bell-check-solid",
	});
}

export default Component;
