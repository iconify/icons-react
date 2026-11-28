import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nklc1dw1b.css';
import '../../css/v/vrbeutb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nklc1dw1b secondary"/><path class="primary vrbeutb5g"/></g>`,
		"fallback": "iconaut:compass-duotone",
	});
}

export default Component;
