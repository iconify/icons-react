import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rr5bzobwc.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/i/io84_hbus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rr5bzobwc"/><path class="q6u6gfbgw"/><path class="io84_hbus"/></g>`,
		"fallback": "icon-park-solid:collect-picture",
	});
}

export default Component;
