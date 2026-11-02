import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzve8j84k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzve8j84k"/>`,
		"fallback": "mingcute:heart-crack-fill",
	});
}

export default Component;
