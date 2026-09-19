import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3r98nq1y.css';

const viewBox = {"width":1025,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3r98nq1y"/>`,
		"fallback": "whh:fatundo",
	});
}

export default Component;
