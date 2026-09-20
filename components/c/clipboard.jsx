import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/j/j_y4bqb2g.css';
import '../../css/v/vqlyovgcs.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="j_y4bqb2g"/><path class="vqlyovgcs"/></g>`,
		"fallback": "system-uicons:clipboard",
	});
}

export default Component;
