import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkgpju86y.css';
import '../../css/h/hvo3wnkqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bkgpju86y secondary"/><path class="hvo3wnkqo primary"/></g>`,
		"fallback": "iconaut:checks-duotone",
	});
}

export default Component;
