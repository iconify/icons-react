import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r64tg7bmc.css';
import '../../css/f/ft8s9nbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r64tg7bmc secondary"/><path class="ft8s9nbrt primary"/></g>`,
		"fallback": "iconaut:clipboard-paste-duotone",
	});
}

export default Component;
