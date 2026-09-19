import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i0cbaur-o.css';
import '../../css/s/s6kimhb3p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i0cbaur-o"/><path class="s6kimhb3p"/></g>`,
		"fallback": "bi:distribute-horizontal",
	});
}

export default Component;
