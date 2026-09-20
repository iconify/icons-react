import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_u6k5bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_u6k5bzm"/>`,
		"fallback": "mdi:format-letter-case-lower",
	});
}

export default Component;
