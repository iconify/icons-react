import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o-k-qwbls.css';
import '../../css/r/rjy1xybnj.css';
import '../../css/r/rqx2gjabx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o-k-qwbls"/><path class="rjy1xybnj"/><path class="rqx2gjabx"/></g>`,
		"fallback": "solar:chat-square-off-linear",
	});
}

export default Component;
