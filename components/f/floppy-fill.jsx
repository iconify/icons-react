import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/ba0plsbsb.css';
import '../../css/c/cbbuw-72s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ba0plsbsb"/><path class="cbbuw-72s"/></g>`,
		"fallback": "bi:floppy-fill",
	});
}

export default Component;
