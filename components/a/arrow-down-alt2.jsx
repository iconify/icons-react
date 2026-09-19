import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejfwa9bbe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejfwa9bbe"/>`,
		"fallback": "dashicons:arrow-down-alt2",
	});
}

export default Component;
