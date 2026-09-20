import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxbparxmd.css';
import '../../css/v/vpkr_acss.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rxbparxmd"/><path clip-rule="evenodd" class="vpkr_acss"/></g>`,
		"fallback": "streamline-color:insert-cloud-video-flat",
	});
}

export default Component;
