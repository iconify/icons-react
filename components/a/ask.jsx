import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9d0olmlj.css';
import '../../css/u/uia-9wb1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9d0olmlj"/><path clip-rule="evenodd" class="uia-9wb1z"/></g>`,
		"fallback": "codicon:ask",
	});
}

export default Component;
