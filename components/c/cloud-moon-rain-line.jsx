import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxjedbn0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxjedbn0f"/>`,
		"fallback": "mingcute:cloud-moon-rain-line",
	});
}

export default Component;
