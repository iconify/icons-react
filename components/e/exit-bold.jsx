import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gb9q5wbaw.css';
import '../../css/a/ab19u9b5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gb9q5wbaw"/><path class="ab19u9b5h"/></g>`,
		"fallback": "solar:exit-bold",
	});
}

export default Component;
