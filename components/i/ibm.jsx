import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt4zbitpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt4zbitpi"/>`,
		"fallback": "simple-icons:ibm",
	});
}

export default Component;
