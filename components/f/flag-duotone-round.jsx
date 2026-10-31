import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwrqphzgr.css';
import '../../css/p/pvpan2bmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pwrqphzgr"/><path class="pvpan2bmj"/></g>`,
		"fallback": "coolicons:flag-duotone-round",
	});
}

export default Component;
