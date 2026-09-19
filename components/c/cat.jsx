import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/effooqx5h.css';
import '../../css/b/bcg1qveom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="effooqx5h"/><path clip-rule="evenodd" class="bcg1qveom"/></g>`,
		"fallback": "griddy-icons:cat",
	});
}

export default Component;
