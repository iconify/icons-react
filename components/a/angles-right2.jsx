import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwu8b5bdh.css';
import '../../css/j/jd8-kbc-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwu8b5bdh"/><path class="jd8-kbc-x"/></g>`,
		"fallback": "reicon:angles-right2",
	});
}

export default Component;
