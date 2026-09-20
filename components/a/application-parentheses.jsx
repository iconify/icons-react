import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nym2i-c8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nym2i-c8w"/>`,
		"fallback": "mdi:application-parentheses",
	});
}

export default Component;
