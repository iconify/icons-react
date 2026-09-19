import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e6rh4sb8r.css';
import '../../css/x/x7h0knb0z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="e6rh4sb8r"/><path class="x7h0knb0z"/></g>`,
		"fallback": "cryptocurrency-color:game",
	});
}

export default Component;
