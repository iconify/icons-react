import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leg09-b4o.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="leg09-b4o"/>`,
		"fallback": "foundation:crop",
	});
}

export default Component;
