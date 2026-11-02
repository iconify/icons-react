import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lilp8103o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lilp8103o"/>`,
		"fallback": "mingcute:align-vertical-space-between-fill",
	});
}

export default Component;
