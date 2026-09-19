import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gechpxc7u.css';
import '../../css/s/so94mnblz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gechpxc7u"/><path class="so94mnblz"/></g>`,
		"fallback": "at-icons:bulldozer",
	});
}

export default Component;
