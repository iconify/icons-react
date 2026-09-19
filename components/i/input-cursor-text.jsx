import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/at5lhdbih.css';
import '../../css/y/yru4c2b4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="at5lhdbih"/><path class="yru4c2b4h"/></g>`,
		"fallback": "bi:input-cursor-text",
	});
}

export default Component;
