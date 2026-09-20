import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pla7z17_b.css';
import '../../css/i/in-o5hbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pla7z17_b"/><path class="in-o5hbgv"/></g>`,
		"fallback": "solar:branching-paths-down-outline",
	});
}

export default Component;
