import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6d9ipbvt.css';
import '../../css/o/ojl8bdhie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z6d9ipbvt"/><path class="ojl8bdhie"/></g>`,
		"fallback": "pixelarticons:handbag",
	});
}

export default Component;
