import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zy_qbmx9i.css';
import '../../css/z/zqkdx0bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zy_qbmx9i"/><path class="zqkdx0bwy"/></g>`,
		"fallback": "griddy-icons:australia-filled",
	});
}

export default Component;
