import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o75gntb9v.css';
import '../../css/p/p931occ2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o75gntb9v"/><path class="p931occ2e"/></g>`,
		"fallback": "reicon:buy-crypto-filled",
	});
}

export default Component;
