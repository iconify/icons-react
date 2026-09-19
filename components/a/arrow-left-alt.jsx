import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7bavqndi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7bavqndi"/>`,
		"fallback": "dashicons:arrow-left-alt",
	});
}

export default Component;
