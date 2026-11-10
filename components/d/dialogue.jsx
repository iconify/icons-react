import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bgen23bhy.css';
import '../../css/m/moeyrpb8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bgen23bhy"/><path class="moeyrpb8i"/></g>`,
		"fallback": "at-icons:dialogue",
	});
}

export default Component;
