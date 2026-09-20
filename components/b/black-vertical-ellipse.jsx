import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw653obdk.css';
import '../../css/m/mhkxhvbuh.css';
import '../../css/a/a3iyb8b5v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw653obdk"/><path class="mhkxhvbuh"/><path class="a3iyb8b5v"/>`,
		"fallback": "openmoji:black-vertical-ellipse",
	});
}

export default Component;
