import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekqoz8b6p.css';
import '../../css/f/ft2zmcc_l.css';
import '../../css/z/ztobmtb9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekqoz8b6p"/><path class="ft2zmcc_l"/><path clip-rule="evenodd" class="ztobmtb9j"/></g>`,
		"fallback": "reicon:bluetooth-square-duotone",
	});
}

export default Component;
