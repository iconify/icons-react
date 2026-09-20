import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r94-t1kxh.css';
import '../../css/y/y20odkblc.css';
import '../../css/w/we5qrrs3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r94-t1kxh"/><path class="y20odkblc"/><path class="we5qrrs3s"/></g>`,
		"fallback": "solar:closet-2-bold-duotone",
	});
}

export default Component;
