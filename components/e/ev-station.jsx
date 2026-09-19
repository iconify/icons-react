import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zl3vswbfo.css';
import '../../css/g/go-qobczo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zl3vswbfo"/><path class="go-qobczo"/></g>`,
		"fallback": "bi:ev-station",
	});
}

export default Component;
