import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xm8h3ub8g.css';
import '../../css/n/ntvg8ebwg.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/m2-on0bla.css';
import '../../css/v/vipv0t5kp.css';
import '../../css/m/mswbmfbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xm8h3ub8g"/><path class="ntvg8ebwg"/><g class="mc2zb0bvp"><path class="m2-on0bla"/><path class="vipv0t5kp"/><path class="mswbmfbld"/></g></g>`,
		"fallback": "solar:chevrons-left-right-ellipsis-bold-duotone",
	});
}

export default Component;
