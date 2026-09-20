import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyuu4fy-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyuu4fy-i"/>`,
		"fallback": "token:diko",
	});
}

export default Component;
