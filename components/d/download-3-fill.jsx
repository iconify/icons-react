import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni-8--job.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni-8--job"/>`,
		"fallback": "mingcute:download-3-fill",
	});
}

export default Component;
