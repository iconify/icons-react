import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u1gzkvr5a.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/h/hfqsmecof.css';
import '../../css/q/qb_h7yw5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u1gzkvr5a"/><g class="mc2zb0bvp"><path class="hfqsmecof"/><path class="qb_h7yw5a"/></g></g>`,
		"fallback": "solar:arrow-to-top-right-bold-duotone",
	});
}

export default Component;
