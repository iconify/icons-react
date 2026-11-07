import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/re4elkb7b.css';
import '../../css/z/zg90ki5is.css';
import '../../css/r/rqx2gjabx.css';
import '../../css/r/rjy1xybnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="re4elkb7b"/><path class="zg90ki5is"/><path class="rqx2gjabx"/><path class="rjy1xybnj"/></g>`,
		"fallback": "solar:chat-square-off-broken",
	});
}

export default Component;
