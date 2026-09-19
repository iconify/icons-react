import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xiz4axb8q.css';
import '../../css/m/mof6x0bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xiz4axb8q"/><path class="mof6x0bww"/></g>`,
		"fallback": "healthicons:biopsy-outline-24px",
	});
}

export default Component;
