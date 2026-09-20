import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu5lc3b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu5lc3b_s"/>`,
		"fallback": "mdi:firefox",
	});
}

export default Component;
