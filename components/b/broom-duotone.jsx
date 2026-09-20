import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbw5lp2iu.css';
import '../../css/p/p7z889l2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbw5lp2iu"/><path class="p7z889l2b"/></g>`,
		"fallback": "reicon:broom-duotone",
	});
}

export default Component;
