import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/har2xdbeo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="har2xdbeo"/>`,
		"fallback": "dinkie-icons:full-moon-symbol",
	});
}

export default Component;
