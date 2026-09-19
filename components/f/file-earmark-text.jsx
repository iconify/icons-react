import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d9xfkybtr.css';
import '../../css/i/i-agr_i7x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d9xfkybtr"/><path class="i-agr_i7x"/></g>`,
		"fallback": "bi:file-earmark-text",
	});
}

export default Component;
