import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rm9o6_y5m.css';
import '../../css/p/p9iclrb6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rm9o6_y5m"/><path class="p9iclrb6y"/></g>`,
		"fallback": "solar:file-favourite-broken",
	});
}

export default Component;
