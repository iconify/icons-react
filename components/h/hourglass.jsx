import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je9p0tb1r.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je9p0tb1r"/>`,
		"fallback": "el:hourglass",
	});
}

export default Component;
