import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2yjw-bmg.css';
import '../../css/d/d6fy9zwjs.css';
import '../../css/n/n51onubkc.css';
import '../../css/u/u4e0avb0z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2yjw-bmg"/><path class="d6fy9zwjs"/><path class="n51onubkc"/><path class="u4e0avb0z"/></g>`,
		"fallback": "streamline-color:business-handshake",
	});
}

export default Component;
