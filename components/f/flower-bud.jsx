import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/enz1u5xgp.css';
import '../../css/m/m8qvyqjvx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="enz1u5xgp"/><path class="m8qvyqjvx"/></g>`,
		"fallback": "pepicons:flower-bud",
	});
}

export default Component;
