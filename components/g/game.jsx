import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kid-ebbym.css';
import '../../css/z/zvipz8bvv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kid-ebbym"/><path clip-rule="evenodd" class="zvipz8bvv"/></g>`,
		"fallback": "codicon:game",
	});
}

export default Component;
