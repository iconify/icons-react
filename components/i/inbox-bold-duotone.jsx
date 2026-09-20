import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ourocwb_f.css';
import '../../css/b/b_r17rtke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ourocwb_f"/><path class="b_r17rtke"/></g>`,
		"fallback": "solar:inbox-bold-duotone",
	});
}

export default Component;
