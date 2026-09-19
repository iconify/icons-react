import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t_mq_abgk.css';
import '../../css/e/ekf464gcd.css';
import '../../css/z/zy-whpb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t_mq_abgk"/><path class="ekf464gcd"/><path clip-rule="evenodd" class="zy-whpb0x"/></g>`,
		"fallback": "healthicons:blood-a-p-outline-24px",
	});
}

export default Component;
