import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/za0zhmbnj.css';
import '../../css/c/c_t-bdccb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="za0zhmbnj"/><path class="c_t-bdccb"/></g>`,
		"fallback": "bi:clipboard2-fill",
	});
}

export default Component;
