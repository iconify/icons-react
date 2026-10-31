import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xvvptabed.css';
import '../../css/f/f2xx-dbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xvvptabed"/><path class="f2xx-dbsh"/></g>`,
		"fallback": "coolicons:church-bulk-round",
	});
}

export default Component;
