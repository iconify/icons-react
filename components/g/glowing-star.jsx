import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpt9bf_hq.css';
import '../../css/f/f32uk7b6u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpt9bf_hq"/><path class="f32uk7b6u"/>`,
		"fallback": "openmoji:glowing-star",
	});
}

export default Component;
