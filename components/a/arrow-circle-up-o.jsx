import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcy-b-u_j.css';
import '../../css/u/u-e1w8b5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcy-b-u_j"/><path class="u-e1w8b5u"/>`,
		"fallback": "vaadin:arrow-circle-up-o",
	});
}

export default Component;
