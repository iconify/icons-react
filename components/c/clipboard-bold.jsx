import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m390b8qby.css';
import '../../css/h/hdp39t6cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m390b8qby"/><path clip-rule="evenodd" class="hdp39t6cf"/></g>`,
		"fallback": "solar:clipboard-bold",
	});
}

export default Component;
