import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvycutb1o.css';
import '../../css/k/kfrvfm4od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvycutb1o"/><path class="kfrvfm4od"/></g>`,
		"fallback": "coolicons:heading-6-duotone-round",
	});
}

export default Component;
