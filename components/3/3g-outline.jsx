import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hij1pb51c.css';
import '../../css/b/b06lz2bfp.css';
import '../../css/t/tjj8vhbjm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hij1pb51c"/><path class="b06lz2bfp"/><path clip-rule="evenodd" class="tjj8vhbjm"/></g>`,
		"fallback": "healthicons:3g-outline",
	});
}

export default Component;
