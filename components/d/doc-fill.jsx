import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i13lh1b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i13lh1b0c"/>`,
		"fallback": "mingcute:doc-fill",
	});
}

export default Component;
