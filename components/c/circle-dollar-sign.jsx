import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4q8hn6zn.css';
import '../../css/z/z78z6ac7w.css';
import '../../css/r/r5aur-b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4q8hn6zn"/><path class="z78z6ac7w"/><path class="r5aur-b7n"/></g>`,
		"fallback": "hugeicons:circle-dollar-sign",
	});
}

export default Component;
