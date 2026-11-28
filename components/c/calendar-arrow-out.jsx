import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7idm1bbo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7idm1bbo"/>`,
		"fallback": "pullo:calendar-arrow-out",
	});
}

export default Component;
