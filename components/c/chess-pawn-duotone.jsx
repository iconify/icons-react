import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vmz-07b6r.css';
import '../../css/n/nxtilv_rg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary vmz-07b6r"/><path class="nxtilv_rg primary"/></g>`,
		"fallback": "iconaut:chess-pawn-duotone",
	});
}

export default Component;
