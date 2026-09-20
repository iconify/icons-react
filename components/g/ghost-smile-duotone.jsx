import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qttu07b3l.css';
import '../../css/e/eypy6ol3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qttu07b3l"/><path class="eypy6ol3l"/></g>`,
		"fallback": "reicon:ghost-smile-duotone",
	});
}

export default Component;
