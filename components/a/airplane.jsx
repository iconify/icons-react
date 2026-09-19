import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpyssxbsf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpyssxbsf"/>`,
		"fallback": "f7:airplane",
	});
}

export default Component;
