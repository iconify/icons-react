import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uj5l1d1yw.css';
import '../../css/f/f-fmfwbwf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uj5l1d1yw"/><path class="f-fmfwbwf"/></g>`,
		"fallback": "bi:emoji-smile-upside-down",
	});
}

export default Component;
