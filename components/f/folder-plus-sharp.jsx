import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fn-pat0mn.css';
import '../../css/e/eoz2-lbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fn-pat0mn"/><path class="eoz2-lbpy"/></g>`,
		"fallback": "pixelarticons:folder-plus-sharp",
	});
}

export default Component;
