import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_-lpel1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_-lpel1u"/>`,
		"fallback": "mingcute:align-horizontal-distribute-end-fill",
	});
}

export default Component;
