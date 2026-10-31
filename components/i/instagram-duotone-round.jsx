import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yf4df7fvg.css';
import '../../css/y/ybtp1cb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yf4df7fvg"/><path class="ybtp1cb1j"/></g>`,
		"fallback": "coolicons:instagram-duotone-round",
	});
}

export default Component;
