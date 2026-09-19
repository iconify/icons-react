import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bduhlmbpf.css';
import '../../css/j/j8lur2-8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bduhlmbpf"/><path clip-rule="evenodd" class="j8lur2-8g"/></g>`,
		"fallback": "heroicons:cog-solid",
	});
}

export default Component;
