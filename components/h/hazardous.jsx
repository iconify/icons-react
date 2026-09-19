import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-im19uyt.css';
import '../../css/t/tglkl0a-n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-im19uyt"/><path class="tglkl0a-n"/></g>`,
		"fallback": "et:hazardous",
	});
}

export default Component;
