import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh0pj9b6b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh0pj9b6b"/>`,
		"fallback": "openmoji:cyclone",
	});
}

export default Component;
