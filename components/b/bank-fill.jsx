import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie7qaeb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie7qaeb9t"/>`,
		"fallback": "mingcute:bank-fill",
	});
}

export default Component;
