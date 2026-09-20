import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/arws-ygaq.css';
import '../../css/c/c30ltgb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="arws-ygaq"/><path clip-rule="evenodd" class="c30ltgb8j"/></g>`,
		"fallback": "reicon:castle",
	});
}

export default Component;
