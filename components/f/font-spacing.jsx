import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bstfu68-c.css';
import '../../css/j/jf4yq4bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bstfu68-c"/><path clip-rule="evenodd" class="jf4yq4bio"/></g>`,
		"fallback": "gg:font-spacing",
	});
}

export default Component;
