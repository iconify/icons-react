import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2-n05bur.css';
import '../../css/b/blj7wmfcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2-n05bur secondary"/><path class="blj7wmfcg primary"/></g>`,
		"fallback": "iconaut:clover-duotone",
	});
}

export default Component;
