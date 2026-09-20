import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/q/qa-noy6bq.css';
import '../../css/r/riy46sbpp.css';
import '../../css/m/mumjj7_ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="qa-noy6bq"/><path class="riy46sbpp"/></g><path class="mumjj7_ey"/></g>`,
		"fallback": "solar:broom-bold-duotone",
	});
}

export default Component;
