import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h_dmt6r-q.css';
import '../../css/w/w-xxfxlfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h_dmt6r-q"/><path class="w-xxfxlfb"/></g>`,
		"fallback": "si:flag-alt-1-duotone",
	});
}

export default Component;
