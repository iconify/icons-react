import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dx7eawbys.css';
import '../../css/f/f0uia4bbm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dx7eawbys"/><path class="f0uia4bbm"/></g>`,
		"fallback": "heroicons:academic-cap-16-solid",
	});
}

export default Component;
