import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yukungb5t.css';
import '../../css/b/bj1uauo0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yukungb5t"/><path class="bj1uauo0v"/></g>`,
		"fallback": "bi:displayport",
	});
}

export default Component;
