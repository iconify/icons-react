import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uykgn7dan.css';
import '../../css/x/xczt9mbbm.css';
import '../../css/q/qzm-2f19d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uykgn7dan"/><path class="xczt9mbbm"/><path class="qzm-2f19d"/></g>`,
		"fallback": "bi:clipboard-x",
	});
}

export default Component;
