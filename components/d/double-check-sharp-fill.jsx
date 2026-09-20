import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxl6s7b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxl6s7b2e"/>`,
		"fallback": "keyline-icons:double-check-sharp-fill",
	});
}

export default Component;
