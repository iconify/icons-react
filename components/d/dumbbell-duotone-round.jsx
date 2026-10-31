import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/airo5ybgg.css';
import '../../css/n/n8itx3u-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="airo5ybgg"/><path class="n8itx3u-v"/></g>`,
		"fallback": "coolicons:dumbbell-duotone-round",
	});
}

export default Component;
