import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocas68bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocas68bcz"/>`,
		"fallback": "mynaui:airpods-solid",
	});
}

export default Component;
