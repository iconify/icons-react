import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2skdhutu.css';
import '../../css/j/jyqpofbtp.css';
import '../../css/v/vu7v2ythc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2skdhutu"/><path class="jyqpofbtp"/><path class="vu7v2ythc"/></g>`,
		"fallback": "hugeicons:ai-learning",
	});
}

export default Component;
