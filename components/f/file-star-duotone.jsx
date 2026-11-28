import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx_ql9bls.css';
import '../../css/f/fo_tiqolq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bx_ql9bls secondary"/><path class="fo_tiqolq primary"/></g>`,
		"fallback": "iconaut:file-star-duotone",
	});
}

export default Component;
