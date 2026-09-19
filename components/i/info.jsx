import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h4f_4rbxc.css';
import '../../css/j/jam-kg33m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h4f_4rbxc"/><path class="jam-kg33m"/></g>`,
		"fallback": "pepicons:info",
	});
}

export default Component;
