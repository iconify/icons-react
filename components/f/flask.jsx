import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-lf7acey.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-lf7acey"/>`,
		"fallback": "fa-solid:flask",
	});
}

export default Component;
