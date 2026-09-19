import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4p_33ayd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4p_33ayd"/>`,
		"fallback": "fa-solid:caret-square-down",
	});
}

export default Component;
