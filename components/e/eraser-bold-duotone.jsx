import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/d/d35ki5_lu.css';
import '../../css/r/rig3w4iiz.css';
import '../../css/u/urr12-bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="d35ki5_lu"/><path class="rig3w4iiz"/></g><path class="urr12-bxq"/></g>`,
		"fallback": "solar:eraser-bold-duotone",
	});
}

export default Component;
