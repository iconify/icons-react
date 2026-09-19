import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4q9k1w2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4q9k1w2q"/>`,
		"fallback": "griddy-icons:docker",
	});
}

export default Component;
