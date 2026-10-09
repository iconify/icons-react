import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzq6l3b3u.css';
import '../../css/d/dfcj5z_lc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzq6l3b3u"/><path class="dfcj5z_lc"/>`,
		"fallback": "energy-icons:bowling-20",
	});
}

export default Component;
