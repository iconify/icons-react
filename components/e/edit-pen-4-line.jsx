import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7xh53b0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7xh53b0d"/>`,
		"fallback": "majesticons:edit-pen-4-line",
	});
}

export default Component;
