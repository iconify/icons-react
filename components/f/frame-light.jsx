import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucmw7d4mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucmw7d4mr"/>`,
		"fallback": "lets-icons:frame-light",
	});
}

export default Component;
