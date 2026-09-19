import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfeadtbfr.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfeadtbfr"/>`,
		"fallback": "fa-solid:bicycle",
	});
}

export default Component;
