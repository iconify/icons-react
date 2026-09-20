import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zyw39yrbf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jqn9_xd9g.css';
import '../../css/l/lrmsywbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zyw39yrbf"/><g class="mc2zb0bvp"><path class="jqn9_xd9g"/><path class="lrmsywbjb"/></g></g>`,
		"fallback": "solar:dropper-bold-duotone",
	});
}

export default Component;
