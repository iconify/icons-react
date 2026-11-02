import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkee8wzft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkee8wzft"/>`,
		"fallback": "mingcute:braces-fill",
	});
}

export default Component;
