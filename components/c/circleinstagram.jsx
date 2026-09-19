import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg-l0fbuy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg-l0fbuy"/>`,
		"fallback": "whh:circleinstagram",
	});
}

export default Component;
