import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcv5y0bhe.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcv5y0bhe"/>`,
		"fallback": "fa-solid:fire-alt",
	});
}

export default Component;
