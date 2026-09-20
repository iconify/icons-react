import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_-kcvb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_-kcvb0v"/>`,
		"fallback": "ri:hard-drive-fill",
	});
}

export default Component;
