import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cq42jmb5e.css';
import '../../css/l/lalwu7b5p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cq42jmb5e"/><path clip-rule="evenodd" class="lalwu7b5p"/></g>`,
		"fallback": "streamline-flex-color:incoming-call-flat",
	});
}

export default Component;
