import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uty38newd.css';
import '../../css/v/vkrv0epzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uty38newd"/><path class="vkrv0epzs"/></g>`,
		"fallback": "coolicons:circle-progress-half-duotone-round",
	});
}

export default Component;
