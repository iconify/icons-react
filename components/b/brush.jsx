import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on62zfi5z.css';

const viewBox = {"width":717,"height":721};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on62zfi5z"/>`,
		"fallback": "ls:brush",
	});
}

export default Component;
