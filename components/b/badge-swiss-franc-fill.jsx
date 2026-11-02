import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5tfff16z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5tfff16z"/>`,
		"fallback": "mingcute:badge-swiss-franc-fill",
	});
}

export default Component;
