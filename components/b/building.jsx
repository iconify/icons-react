import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgk1ydrjl.css';
import '../../css/m/md5v2cc2g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rgk1ydrjl"/><path class="md5v2cc2g"/></g>`,
		"fallback": "rivet-icons:building",
	});
}

export default Component;
