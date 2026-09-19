import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_cglrb8o.css';
import '../../css/z/ztzwvfbwf.css';
import '../../css/s/sfkx2xqaz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_cglrb8o"/><path class="ztzwvfbwf"/><path class="sfkx2xqaz"/></g>`,
		"fallback": "bi:eye-slash",
	});
}

export default Component;
