import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kulyedl9f.css';
import '../../css/b/bq3oxnbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kulyedl9f"/><path class="bq3oxnbwq"/></g>`,
		"fallback": "mynaui:chart-network-solid",
	});
}

export default Component;
