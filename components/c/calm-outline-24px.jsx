import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_exvyblc.css';
import '../../css/b/bbyb2acnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y_exvyblc"/><path class="bbyb2acnu"/></g>`,
		"fallback": "healthicons:calm-outline-24px",
	});
}

export default Component;
