import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bmuf08bcd.css';
import '../../css/e/e4y_14_tb.css';
import '../../css/i/iroxo5bfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bmuf08bcd"/><path clip-rule="evenodd" class="e4y_14_tb"/><path class="iroxo5bfl"/></g>`,
		"fallback": "griddy-icons:emergency-siren",
	});
}

export default Component;
