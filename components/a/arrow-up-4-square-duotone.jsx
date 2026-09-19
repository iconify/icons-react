import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-uqkzbtx.css';
import '../../css/p/ploiaibtp.css';
import '../../css/y/ybl6tkb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-uqkzbtx"/><path class="ploiaibtp"/><path class="ybl6tkb1v"/></g>`,
		"fallback": "iconamoon:arrow-up-4-square-duotone",
	});
}

export default Component;
