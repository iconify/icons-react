import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clr47hbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr47hbrp"/>`,
		"fallback": "mdi:alphabet-y-box-outline",
	});
}

export default Component;
