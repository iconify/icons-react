import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1u0azxay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1u0azxay"/>`,
		"fallback": "mdi:dice-3-outline",
	});
}

export default Component;
