import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjz61vw-f.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjz61vw-f"/>`,
		"fallback": "fa6-brands:buffer",
	});
}

export default Component;
