import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0e2fqd9g.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0e2fqd9g"/>`,
		"fallback": "system-uicons:arrow-left",
	});
}

export default Component;
