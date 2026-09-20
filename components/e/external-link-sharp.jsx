import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-eirpbih.css';
import '../../css/e/e4em_zboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-eirpbih"/><path class="e4em_zboa"/></g>`,
		"fallback": "pixelarticons:external-link-sharp",
	});
}

export default Component;
