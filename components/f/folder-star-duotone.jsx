import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1sb-acoh.css';
import '../../css/h/hcb5bt_lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1sb-acoh"/><path class="hcb5bt_lp"/></g>`,
		"fallback": "reicon:folder-star-duotone",
	});
}

export default Component;
