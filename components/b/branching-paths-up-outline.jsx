import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pla7z17_b.css';
import '../../css/q/qvtpupb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pla7z17_b"/><path class="qvtpupb_p"/></g>`,
		"fallback": "solar:branching-paths-up-outline",
	});
}

export default Component;
