import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv1yc9b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv1yc9b4s"/>`,
		"fallback": "mingcute:bed-line",
	});
}

export default Component;
