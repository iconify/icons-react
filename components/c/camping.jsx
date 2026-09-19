import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dte1lf23o.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dte1lf23o"/>`,
		"fallback": "whh:camping",
	});
}

export default Component;
