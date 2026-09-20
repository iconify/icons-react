import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x824uwwuu.css';
import '../../css/d/d4nk24yqs.css';
import '../../css/l/lwxjz0bri.css';
import '../../css/t/t31vi_b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x824uwwuu"/><path class="d4nk24yqs"/><path class="lwxjz0bri"/><path class="t31vi_b7l"/></g>`,
		"fallback": "solar:book-bookmark-minimalistic-bold-duotone",
	});
}

export default Component;
