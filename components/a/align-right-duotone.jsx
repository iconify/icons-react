import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ms9-v9bly.css';
import '../../css/g/g93pqffek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ms9-v9bly"/><path clip-rule="evenodd" class="g93pqffek"/></g>`,
		"fallback": "reicon:align-right-duotone",
	});
}

export default Component;
