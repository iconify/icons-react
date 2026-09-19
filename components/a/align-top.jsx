import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zf63p2uya.css';
import '../../css/o/o5x-6cbab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect transform="matrix(1 0 0 -1 6 15)" class="zf63p2uya"/><path class="o5x-6cbab"/></g>`,
		"fallback": "bi:align-top",
	});
}

export default Component;
