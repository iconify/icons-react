import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv9ie8b5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv9ie8b5z"/>`,
		"fallback": "mdi-light:arrow-down",
	});
}

export default Component;
