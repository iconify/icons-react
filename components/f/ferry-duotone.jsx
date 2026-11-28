import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6--vgbvd.css';
import '../../css/v/vwrf1lu4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6--vgbvd secondary"/><path class="primary vwrf1lu4i"/></g>`,
		"fallback": "iconaut:ferry-duotone",
	});
}

export default Component;
