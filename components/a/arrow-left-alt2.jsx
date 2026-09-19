import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1r1b3bgi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1r1b3bgi"/>`,
		"fallback": "dashicons:arrow-left-alt2",
	});
}

export default Component;
