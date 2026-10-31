import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmwl_vflh.css';
import '../../css/p/pecyojbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dmwl_vflh"/><path class="pecyojbct"/></g>`,
		"fallback": "coolicons:chart-bar-stacked-duotone-round",
	});
}

export default Component;
