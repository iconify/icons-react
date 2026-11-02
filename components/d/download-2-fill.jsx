import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_9-f9blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_9-f9blt"/>`,
		"fallback": "mingcute:download-2-fill",
	});
}

export default Component;
