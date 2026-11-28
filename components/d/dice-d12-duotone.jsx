import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y95z9bb2w.css';
import '../../css/v/vc_tx0w-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary y95z9bb2w"/><path class="primary vc_tx0w-l"/></g>`,
		"fallback": "iconaut:dice-d12-duotone",
	});
}

export default Component;
