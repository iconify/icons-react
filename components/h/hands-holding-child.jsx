import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1r5mhbpm.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1r5mhbpm"/>`,
		"fallback": "fa7-solid:hands-holding-child",
	});
}

export default Component;
