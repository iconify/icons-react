import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d8dmy7b4g.css';
import '../../css/f/fzff8ybcb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d8dmy7b4g"/><path class="fzff8ybcb"/></g>`,
		"fallback": "at-icons:butterfly",
	});
}

export default Component;
