import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf-0_1bay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf-0_1bay"/>`,
		"fallback": "mingcute:brush-2-ai-fill",
	});
}

export default Component;
