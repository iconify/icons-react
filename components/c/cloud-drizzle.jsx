import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efv6cdc0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efv6cdc0q"/>`,
		"fallback": "bi:cloud-drizzle",
	});
}

export default Component;
