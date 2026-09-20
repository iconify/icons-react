import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nndtzvb-p.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/v046j2erx.css';
import '../../css/h/hzza3-bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nndtzvb-p"/><g class="mc2zb0bvp"><path class="v046j2erx"/><path class="hzza3-bxa"/></g></g>`,
		"fallback": "solar:airbuds-case-bold-duotone",
	});
}

export default Component;
