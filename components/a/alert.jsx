import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inn8jvb8q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inn8jvb8q"/>`,
		"fallback": "octicon:alert",
	});
}

export default Component;
