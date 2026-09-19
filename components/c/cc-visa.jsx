import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo-cg314a.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo-cg314a"/>`,
		"fallback": "fa:cc-visa",
	});
}

export default Component;
