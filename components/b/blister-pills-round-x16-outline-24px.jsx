import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_2frubhd.css';
import '../../css/k/kg1dl6a6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_2frubhd"/><path clip-rule="evenodd" class="kg1dl6a6r"/></g>`,
		"fallback": "healthicons:blister-pills-round-x16-outline-24px",
	});
}

export default Component;
