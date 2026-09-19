import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mq3tvbcci.css';
import '../../css/d/dtznjtbem.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mq3tvbcci"/><path class="dtznjtbem"/></g>`,
		"fallback": "bi:clipboard-plus-fill",
	});
}

export default Component;
