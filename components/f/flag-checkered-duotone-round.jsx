import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vt0vt8btq.css';
import '../../css/k/k4s0hzbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vt0vt8btq"/><path class="k4s0hzbez"/></g>`,
		"fallback": "coolicons:flag-checkered-duotone-round",
	});
}

export default Component;
