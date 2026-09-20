import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whwf_s5on.css';
import '../../css/o/op-uyebei.css';
import '../../css/c/c0q-ydf9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whwf_s5on"/><path class="op-uyebei"/><path class="c0q-ydf9l"/></g>`,
		"fallback": "solar:camera-off-outline",
	});
}

export default Component;
