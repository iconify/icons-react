import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei08f3b-n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei08f3b-n"/>`,
		"fallback": "dashicons:admin-links",
	});
}

export default Component;
