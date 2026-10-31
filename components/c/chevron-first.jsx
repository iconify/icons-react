import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bc6ll9ksr.css';
import '../../css/n/nd4_eabip.css';
import '../../css/n/ngiiyccfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bc6ll9ksr wm-shadow"/><path class="nd4_eabip wm-shadow"/><path class="ngiiyccfa"/></g>`,
		"fallback": "withicons-brutal:chevron-first",
	});
}

export default Component;
