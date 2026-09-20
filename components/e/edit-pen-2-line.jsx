import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb61kbyba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb61kbyba"/>`,
		"fallback": "majesticons:edit-pen-2-line",
	});
}

export default Component;
