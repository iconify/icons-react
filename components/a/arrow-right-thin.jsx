import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcu9tlrct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcu9tlrct"/>`,
		"fallback": "mdi:arrow-right-thin",
	});
}

export default Component;
