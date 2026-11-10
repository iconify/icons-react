import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q5ya1mb7i.css';
import '../../css/d/dgr-e3beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q5ya1mb7i"/><path class="dgr-e3beh"/></g>`,
		"fallback": "andrsrxn:hexagon",
	});
}

export default Component;
