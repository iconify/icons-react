import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af2cjiisu.css';
import '../../css/r/rcdfnub0v.css';
import '../../css/g/gw4xtsbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="af2cjiisu"/><rect class="rcdfnub0v"/><path class="gw4xtsbie"/></g>`,
		"fallback": "andrsrxn:device-pc-play",
	});
}

export default Component;
