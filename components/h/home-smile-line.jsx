import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqf0ry-2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqf0ry-2z"/>`,
		"fallback": "ri:home-smile-line",
	});
}

export default Component;
