import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tsddqxbdo.css';
import '../../css/y/y45ba_1wc.css';
import '../../css/q/q5ab2qbvl.css';
import '../../css/q/qg833-baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="tsddqxbdo"/><path class="y45ba_1wc"/></g><path class="q5ab2qbvl"/><path class="qg833-baq"/></g>`,
		"fallback": "solar:balloon-bold-duotone",
	});
}

export default Component;
