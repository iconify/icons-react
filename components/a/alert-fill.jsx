import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brq9xm1sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brq9xm1sk"/>`,
		"fallback": "mingcute:alert-fill",
	});
}

export default Component;
