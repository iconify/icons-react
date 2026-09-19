import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vbq3oubos.css';
import '../../css/v/v0h4gccos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vbq3oubos"/><path clip-rule="evenodd" class="v0h4gccos"/></g>`,
		"fallback": "gg:display-grid",
	});
}

export default Component;
