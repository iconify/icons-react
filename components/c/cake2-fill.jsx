import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pemnrxb4x.css';
import '../../css/w/wzrihgyar.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pemnrxb4x"/><path class="wzrihgyar"/></g>`,
		"fallback": "bi:cake2-fill",
	});
}

export default Component;
