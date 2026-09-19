import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yny9m0b3s.css';
import '../../css/y/yq7ja8j5f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yny9m0b3s"/><path class="yq7ja8j5f"/></g>`,
		"fallback": "at-icons:glass-pane",
	});
}

export default Component;
