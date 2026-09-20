import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/evaij0b3k.css';
import '../../css/z/zknlkb7zg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="evaij0b3k"/><path class="zknlkb7zg"/></g>`,
		"fallback": "tabler:filters-filled",
	});
}

export default Component;
