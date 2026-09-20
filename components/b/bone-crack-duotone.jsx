import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpwc6smfh.css';
import '../../css/s/sxm9db2be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpwc6smfh"/><path class="sxm9db2be"/></g>`,
		"fallback": "reicon:bone-crack-duotone",
	});
}

export default Component;
