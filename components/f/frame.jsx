import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ru7if7xhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ru7if7xhs"/>`,
		"fallback": "lets-icons:frame",
	});
}

export default Component;
