import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tsyvnh0gv.css';
import '../../css/f/f95vu7shx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tsyvnh0gv"/><path class="f95vu7shx"/></g>`,
		"fallback": "codicon:git-pull-request-done",
	});
}

export default Component;
