import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-_5oksg.css';
import '../../css/n/no7vk9bpc.css';
import '../../css/s/sb52f8dlw.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/q/q72ijub7o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sz-_5oksg"/><path class="no7vk9bpc"/><path class="sb52f8dlw"/><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="q72ijub7o"/><circle class="usozxnbrm"/></g>`,
		"fallback": "openmoji:globe-showing-asia-australia",
	});
}

export default Component;
