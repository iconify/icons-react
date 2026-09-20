import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqcq9hbfy.css';
import '../../css/g/gw3_42bwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zqcq9hbfy"/><path class="gw3_42bwt"/></g>`,
		"fallback": "tabler:chart-pie-filled",
	});
}

export default Component;
