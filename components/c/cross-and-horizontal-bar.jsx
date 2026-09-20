import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx1giabeb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx1giabeb"/>`,
		"fallback": "roentgen:cross-and-horizontal-bar",
	});
}

export default Component;
