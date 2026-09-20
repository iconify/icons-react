import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-53a9b9m.css';
import '../../css/v/v4pibzalj.css';
import '../../css/g/g-v39cl0x.css';
import '../../css/l/ll10r739d.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f-53a9b9m"/><path class="v4pibzalj"/><path class="g-v39cl0x"/><path class="ll10r739d"/></g>`,
		"fallback": "iwwa:duplicate",
	});
}

export default Component;
