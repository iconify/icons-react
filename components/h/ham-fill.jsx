import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lab7x-wem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lab7x-wem"/>`,
		"fallback": "mingcute:ham-fill",
	});
}

export default Component;
