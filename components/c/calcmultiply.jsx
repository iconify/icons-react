import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd2ba26lp.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd2ba26lp"/>`,
		"fallback": "whh:calcmultiply",
	});
}

export default Component;
