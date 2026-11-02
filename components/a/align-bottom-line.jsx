import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghams4dxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghams4dxx"/>`,
		"fallback": "mingcute:align-bottom-line",
	});
}

export default Component;
