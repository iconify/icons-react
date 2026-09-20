import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnme16e9o.css';
import '../../css/t/t55umhb4z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/m/mmptx5xgp.css';
import '../../css/r/r2btzyb3k.css';
import '../../css/c/cfzoe278o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mnme16e9o"/><path class="t55umhb4z"/><g class="mc2zb0bvp"><path class="mmptx5xgp"/><path class="r2btzyb3k"/><path class="cfzoe278o"/></g></g>`,
		"fallback": "solar:align-vertical-center-bold-duotone",
	});
}

export default Component;
