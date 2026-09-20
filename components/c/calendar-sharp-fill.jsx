import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m1nc0tqhq.css';
import '../../css/e/en5inh-5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="m1nc0tqhq"/><path class="en5inh-5t"/></g>`,
		"fallback": "keyline-icons:calendar-sharp-fill",
	});
}

export default Component;
