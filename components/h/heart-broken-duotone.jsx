import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xw4hlmb2m.css';
import '../../css/s/s1o5xevyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xw4hlmb2m"/><path class="s1o5xevyx"/></g>`,
		"fallback": "reicon:heart-broken-duotone",
	});
}

export default Component;
