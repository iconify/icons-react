import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jladv6buj.css';
import '../../css/p/po5uknb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jladv6buj"/><path class="po5uknb4o"/></g>`,
		"fallback": "coolicons:frame-duotone-round",
	});
}

export default Component;
