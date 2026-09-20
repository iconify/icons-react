import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/folbxkbdn.css';
import '../../css/v/vmi9hvstx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="folbxkbdn"/><path class="vmi9hvstx"/></g>`,
		"fallback": "rivet-icons:chevrons-left",
	});
}

export default Component;
