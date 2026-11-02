import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu7x7cbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu7x7cbib"/>`,
		"fallback": "mingcute:brackets-angle-line",
	});
}

export default Component;
