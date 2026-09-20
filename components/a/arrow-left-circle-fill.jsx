import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hai481blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hai481blp"/>`,
		"fallback": "mingcute:arrow-left-circle-fill",
	});
}

export default Component;
