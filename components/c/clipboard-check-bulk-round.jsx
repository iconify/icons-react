import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j90vb6xsh.css';
import '../../css/r/rl82fhhig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j90vb6xsh"/><path class="rl82fhhig"/></g>`,
		"fallback": "coolicons:clipboard-check-bulk-round",
	});
}

export default Component;
