import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_x4racpr.css';
import '../../css/d/d_3s-5tft.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_x4racpr"/><path class="d_3s-5tft"/></g>`,
		"fallback": "bi:hdd-rack",
	});
}

export default Component;
