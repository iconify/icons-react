import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/undusqblp.css';
import '../../css/b/bsljbyrxg.css';
import '../../css/e/e1i1n9b5e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="undusqblp"/><path class="bsljbyrxg"/><path class="e1i1n9b5e"/></g>`,
		"fallback": "streamline-flex-color:expand-window-1",
	});
}

export default Component;
