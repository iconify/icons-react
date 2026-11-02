import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/betak53lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="betak53lt"/>`,
		"fallback": "mingcute:book-open-check-fill",
	});
}

export default Component;
