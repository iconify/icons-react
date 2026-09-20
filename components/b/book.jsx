import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr_a935hz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr_a935hz"/>`,
		"fallback": "picon:book",
	});
}

export default Component;
