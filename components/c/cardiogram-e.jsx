import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4tzzzbcf.css';
import '../../css/a/a8ny2pbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d4tzzzbcf"/><path class="a8ny2pbhs"/></g>`,
		"fallback": "healthicons:cardiogram-e",
	});
}

export default Component;
