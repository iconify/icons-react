import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl50bob_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl50bob_z"/>`,
		"fallback": "mingcute:anticlockwise-alt-line",
	});
}

export default Component;
