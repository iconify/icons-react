import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryiy56m8m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryiy56m8m"/>`,
		"fallback": "fa7-solid:flask",
	});
}

export default Component;
