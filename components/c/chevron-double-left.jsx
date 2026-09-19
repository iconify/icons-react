import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ck37d3ufv.css';
import '../../css/v/v3k0-44_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ck37d3ufv"/><path class="v3k0-44_i"/></g>`,
		"fallback": "gg:chevron-double-left",
	});
}

export default Component;
