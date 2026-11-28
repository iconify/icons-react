import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcp3nyk7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary xcp3nyk7u"/>`,
		"fallback": "iconaut:chevron-triple-down-duotone",
	});
}

export default Component;
