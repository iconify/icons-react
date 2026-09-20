import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vngg99mcs.css';
import '../../css/j/j4bye4bll.css';
import '../../css/g/geif4f81p.css';
import '../../css/d/d86n5g0_a.css';
import '../../css/n/n-n9wgbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vngg99mcs"/><path class="j4bye4bll"/><path class="geif4f81p"/><path class="d86n5g0_a"/><path class="n-n9wgbgj"/></g>`,
		"fallback": "solar:gameboy-outline",
	});
}

export default Component;
