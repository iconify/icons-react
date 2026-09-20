import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lllss6bpg.css';
import '../../css/y/y1tn0ihmy.css';
import '../../css/b/beh9x8bct.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lllss6bpg"/><path clip-rule="evenodd" class="y1tn0ihmy"/><path class="beh9x8bct"/></g>`,
		"fallback": "streamline-color:browser-build-flat",
	});
}

export default Component;
