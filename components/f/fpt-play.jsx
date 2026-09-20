import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj4o9achs.css';

const viewBox = {"width":279.62,"height":279.9};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj4o9achs"/>`,
		"fallback": "thesvg:fpt-play",
	});
}

export default Component;
