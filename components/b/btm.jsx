import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qv4y1vb8z.css';
import '../../css/s/sce58_bpl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="qv4y1vb8z"/><path class="sce58_bpl"/></g>`,
		"fallback": "cryptocurrency-color:btm",
	});
}

export default Component;
