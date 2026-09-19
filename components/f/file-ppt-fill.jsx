import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5stc5b_i.css';
import '../../css/c/c77zw35go.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g5stc5b_i"/><path class="c77zw35go"/></g>`,
		"fallback": "bi:file-ppt-fill",
	});
}

export default Component;
