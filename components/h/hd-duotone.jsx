import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spcod9vyn.css';
import '../../css/c/ccqi-3g7w.css';
import '../../css/q/q1ea4seuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spcod9vyn"/><path class="ccqi-3g7w"/><path clip-rule="evenodd" class="q1ea4seuy"/></g>`,
		"fallback": "reicon:hd-duotone",
	});
}

export default Component;
