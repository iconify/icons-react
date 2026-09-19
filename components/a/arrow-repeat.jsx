import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gy8onk1sl.css';
import '../../css/f/fusrefbbl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gy8onk1sl"/><path class="fusrefbbl"/></g>`,
		"fallback": "bi:arrow-repeat",
	});
}

export default Component;
