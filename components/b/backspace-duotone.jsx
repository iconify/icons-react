import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hpsdpobvr.css';
import '../../css/o/omhq52ksi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hpsdpobvr"/><path class="omhq52ksi"/></g>`,
		"fallback": "iconamoon:backspace-duotone",
	});
}

export default Component;
