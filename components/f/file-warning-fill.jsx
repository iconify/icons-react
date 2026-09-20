import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rujup72zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rujup72zm"/>`,
		"fallback": "ri:file-warning-fill",
	});
}

export default Component;
