import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6rk1e3su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6rk1e3su"/>`,
		"fallback": "heroicons-outline:inbox-arrow-down",
	});
}

export default Component;
