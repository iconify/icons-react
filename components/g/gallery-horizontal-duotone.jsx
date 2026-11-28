import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cii1l36cz.css';
import '../../css/w/wauif2byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cii1l36cz secondary"/><path class="primary wauif2byh"/></g>`,
		"fallback": "iconaut:gallery-horizontal-duotone",
	});
}

export default Component;
