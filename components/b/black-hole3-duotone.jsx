import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lwmvw4b0u.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/ik3o_ac8w.css';
import '../../css/l/lpq-3cb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lwmvw4b0u"/><g class="mc2zb0bvp"><path class="ik3o_ac8w"/><path class="lpq-3cb8j"/></g></g>`,
		"fallback": "reicon:black-hole3-duotone",
	});
}

export default Component;
