import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3bsbmb9h.css';
import '../../css/l/lww03dext.css';
import '../../css/r/rqx2gjabx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z3bsbmb9h"/><path class="lww03dext"/><path class="rqx2gjabx"/></g>`,
		"fallback": "solar:chat-square-off-line-duotone",
	});
}

export default Component;
