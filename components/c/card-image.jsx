import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fd844zbcy.css';
import '../../css/g/gvec8ue3d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fd844zbcy"/><path class="gvec8ue3d"/></g>`,
		"fallback": "bi:card-image",
	});
}

export default Component;
