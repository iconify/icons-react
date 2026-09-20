import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjhfc7b4a.css';
import '../../css/d/d5pboqchm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjhfc7b4a"/><path clip-rule="evenodd" class="d5pboqchm"/></g>`,
		"fallback": "reicon:archive-up2-filled",
	});
}

export default Component;
