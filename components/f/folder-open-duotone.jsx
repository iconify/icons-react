import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o2dzoszkv.css';
import '../../css/k/kssgmtgbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o2dzoszkv secondary"/><path class="kssgmtgbl primary"/></g>`,
		"fallback": "iconaut:folder-open-duotone",
	});
}

export default Component;
