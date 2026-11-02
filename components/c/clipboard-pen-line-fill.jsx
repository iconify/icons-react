import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxl-6tboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxl-6tboc"/>`,
		"fallback": "mingcute:clipboard-pen-line-fill",
	});
}

export default Component;
