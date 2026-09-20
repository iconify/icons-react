import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juk_1pbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juk_1pbpy"/>`,
		"fallback": "mdi:account-arrow-down-outline",
	});
}

export default Component;
