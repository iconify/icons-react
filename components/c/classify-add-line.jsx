import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ielcc5-zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ielcc5-zr"/>`,
		"fallback": "mingcute:classify-add-line",
	});
}

export default Component;
