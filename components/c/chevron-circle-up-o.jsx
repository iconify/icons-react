import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5o--747c.css';
import '../../css/x/xcy-b-u_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5o--747c"/><path class="xcy-b-u_j"/>`,
		"fallback": "vaadin:chevron-circle-up-o",
	});
}

export default Component;
