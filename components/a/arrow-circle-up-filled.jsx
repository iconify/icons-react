import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot-y1i3we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot-y1i3we"/>`,
		"fallback": "griddy-icons:arrow-circle-up-filled",
	});
}

export default Component;
