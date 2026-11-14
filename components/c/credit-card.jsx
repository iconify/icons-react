import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8dx7ab2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8dx7ab2d"/>`,
		"fallback": "hugeicons:credit-card",
	});
}

export default Component;
