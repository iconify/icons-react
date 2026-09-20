import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0day-b1r.css';
import '../../css/r/rzjiq6ajn.css';
import '../../css/j/jce5cjb-r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0day-b1r"/><path class="rzjiq6ajn"/><path class="jce5cjb-r"/>`,
		"fallback": "openmoji:droplet",
	});
}

export default Component;
