import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geb6cvb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geb6cvb1p"/>`,
		"fallback": "mingcute:home-7-line",
	});
}

export default Component;
