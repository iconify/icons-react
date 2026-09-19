import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9pqwaceb.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9pqwaceb"/>`,
		"fallback": "foundation:arrows-out",
	});
}

export default Component;
