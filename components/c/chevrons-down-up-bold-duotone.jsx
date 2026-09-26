import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qmt49hbjl.css';
import '../../css/q/qv3eynb2i.css';
import '../../css/m/msbfvkbhy.css';
import '../../css/i/iux0t_bqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="qmt49hbjl"/><path class="qv3eynb2i"/></g><path class="msbfvkbhy"/><path class="iux0t_bqr"/></g>`,
		"fallback": "solar:chevrons-down-up-bold-duotone",
	});
}

export default Component;
