import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-uqkzbtx.css';
import '../../css/p/ploiaibtp.css';
import '../../css/s/sul_i9byr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-uqkzbtx"/><path class="ploiaibtp"/><path class="sul_i9byr"/></g>`,
		"fallback": "iconamoon:arrow-bottom-up-4-square-duotone",
	});
}

export default Component;
