import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4igpab7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4igpab7z"/>`,
		"fallback": "mynaui:heart-plus-solid",
	});
}

export default Component;
