import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/n/n9vomcc2d.css';
import '../../css/z/z_32mkbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="n9vomcc2d"/><path class="z_32mkbsz"/></g>`,
		"fallback": "solar:inbox-in-bold-duotone",
	});
}

export default Component;
