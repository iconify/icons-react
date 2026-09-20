import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kdyasncgn.css';
import '../../css/j/jb8hy8b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kdyasncgn"/><path class="jb8hy8b-t"/></g>`,
		"fallback": "solar:eye-linear",
	});
}

export default Component;
