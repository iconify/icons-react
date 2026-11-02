import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m24q4o26z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m24q4o26z"/>`,
		"fallback": "mingcute:boom-box-fill",
	});
}

export default Component;
