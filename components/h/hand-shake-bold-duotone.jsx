import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/ysyd1_aah.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f0am_1baw.css';
import '../../css/y/ygy_r1v7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ysyd1_aah"/><g class="mc2zb0bvp"><path class="f0am_1baw"/><path class="ygy_r1v7l"/></g></g>`,
		"fallback": "solar:hand-shake-bold-duotone",
	});
}

export default Component;
