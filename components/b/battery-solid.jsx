import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y-0p5ujpe.css';
import '../../css/r/rkkbv5byy.css';
import '../../css/c/cylt8jbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y-0p5ujpe"/><path clip-rule="evenodd" class="rkkbv5byy"/><path class="cylt8jbgp"/></g>`,
		"fallback": "flowbite:battery-solid",
	});
}

export default Component;
