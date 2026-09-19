import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/osg3mvbzy.css';
import '../../css/f/fcdp3-b9o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="osg3mvbzy"/><path class="fcdp3-b9o"/></g>`,
		"fallback": "at-icons:apple-eaten",
	});
}

export default Component;
