import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eupi8rb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eupi8rb3s"/>`,
		"fallback": "mingcute:forward-2-fill",
	});
}

export default Component;
