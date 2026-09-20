import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcho64smd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcho64smd"/>`,
		"fallback": "mynaui:haze-solid",
	});
}

export default Component;
