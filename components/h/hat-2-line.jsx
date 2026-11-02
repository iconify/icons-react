import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drbstn8ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drbstn8ih"/>`,
		"fallback": "mingcute:hat-2-line",
	});
}

export default Component;
