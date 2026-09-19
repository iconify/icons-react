import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohf6vwbgv.css';
import '../../css/a/a1qu7xb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ohf6vwbgv"/><path clip-rule="evenodd" class="a1qu7xb0o"/></g>`,
		"fallback": "griddy-icons:eftpos",
	});
}

export default Component;
