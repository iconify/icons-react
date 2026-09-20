import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/p/pu9dkg06k.css';
import '../../css/t/trw0sn6se.css';
import '../../css/x/x-z8xccjq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="pu9dkg06k"/><path class="trw0sn6se"/><path class="x-z8xccjq"/></g>`,
		"fallback": "streamline-flex-color:charging",
	});
}

export default Component;
