import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d333b-bws.css';
import '../../css/w/w0jmmac2d.css';
import '../../css/v/vuviyun2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d333b-bws"/><path class="w0jmmac2d"/><path class="vuviyun2w"/></g>`,
		"fallback": "reicon:cosmetic-duotone",
	});
}

export default Component;
