import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/try69ew5r.css';
import '../../css/a/aco4-8bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="try69ew5r"/><path class="aco4-8bdb"/></g>`,
		"fallback": "reicon:heart-pulse2-duotone",
	});
}

export default Component;
