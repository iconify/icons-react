import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hue9xvetb.css';
import '../../css/p/p3p_7xbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hue9xvetb"/><path class="p3p_7xbhq"/></g>`,
		"fallback": "andrsrxn:cube",
	});
}

export default Component;
