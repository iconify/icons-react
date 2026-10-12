import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/by19f6bep.css';
import '../../css/f/fvqsv5bpy.css';
import '../../css/l/lximt-bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="by19f6bep"/><rect class="fvqsv5bpy"/><path class="lximt-bfz"/></g>`,
		"fallback": "andrsrxn:device-tv-off",
	});
}

export default Component;
