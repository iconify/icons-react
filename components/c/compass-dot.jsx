import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p4rxo9gpl.css';
import '../../css/o/or9a92b3r.css';
import '../../css/t/t076rfbic.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p4rxo9gpl"/><path class="or9a92b3r"/><path class="t076rfbic"/></g>`,
		"fallback": "codicon:compass-dot",
	});
}

export default Component;
