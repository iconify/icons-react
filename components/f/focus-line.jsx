import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqgz50euy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqgz50euy"/>`,
		"fallback": "ri:focus-line",
	});
}

export default Component;
