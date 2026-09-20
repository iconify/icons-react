import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyaf8byaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyaf8byaq"/>`,
		"fallback": "mdi:folder-transfer-outline",
	});
}

export default Component;
