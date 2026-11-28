import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xhoxcxbuj.css';
import '../../css/i/irwm-cc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xhoxcxbuj"/><path class="irwm-cc3w primary"/></g>`,
		"fallback": "iconaut:captions-duotone",
	});
}

export default Component;
