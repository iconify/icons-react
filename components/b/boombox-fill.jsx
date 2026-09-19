import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0776obrd.css';
import '../../css/b/bxvn2acmw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0776obrd"/><path class="bxvn2acmw"/></g>`,
		"fallback": "bi:boombox-fill",
	});
}

export default Component;
