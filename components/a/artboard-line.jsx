import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4f6tbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4f6tbca"/>`,
		"fallback": "mingcute:artboard-line",
	});
}

export default Component;
