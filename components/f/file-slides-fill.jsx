import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vf38fj4hd.css';
import '../../css/z/zm46kjb5p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vf38fj4hd"/><path class="zm46kjb5p"/></g>`,
		"fallback": "bi:file-slides-fill",
	});
}

export default Component;
