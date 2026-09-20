import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a09_lptpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a09_lptpx"/>`,
		"fallback": "ri:arrow-right-down-fill",
	});
}

export default Component;
