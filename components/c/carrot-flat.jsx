import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m01h-7bqz.css';
import '../../css/v/vi-x_zbct.css';
import '../../css/w/w-elgk49c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m01h-7bqz"/><path class="vi-x_zbct"/><path clip-rule="evenodd" class="w-elgk49c"/></g>`,
		"fallback": "streamline-flex-color:carrot-flat",
	});
}

export default Component;
