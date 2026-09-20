import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6jtv7bwq.css';
import '../../css/i/it3ng9bvg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6jtv7bwq"/><path class="it3ng9bvg"/></g>`,
		"fallback": "rivet-icons:gears",
	});
}

export default Component;
