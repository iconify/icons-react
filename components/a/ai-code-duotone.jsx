import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hfmdt_ugj.css';
import '../../css/e/e_3u1fbby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hfmdt_ugj secondary"/><path class="e_3u1fbby primary"/></g>`,
		"fallback": "iconaut:ai-code-duotone",
	});
}

export default Component;
