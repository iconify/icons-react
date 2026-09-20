import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spcod9vyn.css';
import '../../css/i/ibo59l2hl.css';
import '../../css/z/zaz-abcxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spcod9vyn"/><path class="ibo59l2hl"/><path clip-rule="evenodd" class="zaz-abcxs"/></g>`,
		"fallback": "reicon:hq-duotone",
	});
}

export default Component;
