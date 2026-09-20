import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kk6zn9bcr.css';
import '../../css/f/ft79tbbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kk6zn9bcr"/><path class="ft79tbbjx"/></g>`,
		"fallback": "pixelarticons:at-sign-sharp",
	});
}

export default Component;
