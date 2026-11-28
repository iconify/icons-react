import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgn7ifbno.css';
import '../../css/l/lnx2r3bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jgn7ifbno secondary"/><path class="lnx2r3bcr primary"/></g>`,
		"fallback": "iconaut:frisbee-duotone",
	});
}

export default Component;
