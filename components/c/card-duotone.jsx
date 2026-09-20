import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k5lvgfumw.css';
import '../../css/q/q19j0kwgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k5lvgfumw"/><path class="q19j0kwgj"/></g>`,
		"fallback": "reicon:card-duotone",
	});
}

export default Component;
