import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnfhveh-h.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnfhveh-h"/>`,
		"fallback": "iwwa:angle-left",
	});
}

export default Component;
