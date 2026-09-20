import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijkaun-ao.css';
import '../../css/p/pgosgl_ok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijkaun-ao"/><path clip-rule="evenodd" class="pgosgl_ok"/></g>`,
		"fallback": "lets-icons:basket-fill",
	});
}

export default Component;
