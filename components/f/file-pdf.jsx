import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekf9ltxxw.css';
import '../../css/f/flk8g9b5e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekf9ltxxw"/><path class="flk8g9b5e"/></g>`,
		"fallback": "codicon:file-pdf",
	});
}

export default Component;
