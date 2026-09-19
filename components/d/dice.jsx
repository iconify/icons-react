import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/znk5klb1g.css';
import '../../css/z/z_k11kb3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="znk5klb1g"/><path class="z_k11kb3v"/></g>`,
		"fallback": "at-icons:dice",
	});
}

export default Component;
