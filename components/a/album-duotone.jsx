import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ghye6ac_s.css';
import '../../css/q/q-qszr_we.css';
import '../../css/x/xzbd7ubcv.css';
import '../../css/c/c9aqz6byz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ghye6ac_s"/><path clip-rule="evenodd" class="q-qszr_we"/><path class="xzbd7ubcv"/><path class="c9aqz6byz"/></g>`,
		"fallback": "reicon:album-duotone",
	});
}

export default Component;
