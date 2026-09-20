import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sikot-83c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sikot-83c"/>`,
		"fallback": "mdi-light:credit-card",
	});
}

export default Component;
