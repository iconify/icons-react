import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5hh53b_u.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/mjiehcc6m.css';
import '../../css/v/vcowebo7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i5hh53b_u"/><g class="mc2zb0bvp"><path class="mjiehcc6m"/><path class="vcowebo7q"/></g></g>`,
		"fallback": "solar:case-round-bold-duotone",
	});
}

export default Component;
