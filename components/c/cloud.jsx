import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9n-rccba.css';
import '../../css/e/ez7bfxbbf.css';
import '../../css/j/j45b4b0vz.css';
import '../../css/v/vk1xbsbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9n-rccba"/><path class="ez7bfxbbf"/><path class="j45b4b0vz"/><path class="vk1xbsbgc"/></g>`,
		"fallback": "andrsrxn:cloud",
	});
}

export default Component;
