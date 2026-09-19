import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v579gbquj.css';
import '../../css/u/uowxsp5wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v579gbquj"/><path class="uowxsp5wy"/></g>`,
		"fallback": "gg:distribute-vertical",
	});
}

export default Component;
