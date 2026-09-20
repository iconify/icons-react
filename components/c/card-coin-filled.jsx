import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk0sot7vu.css';
import '../../css/z/z0zxjzbsu.css';
import '../../css/l/laec6ibgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xk0sot7vu"/><path class="z0zxjzbsu"/><path class="laec6ibgw"/></g>`,
		"fallback": "reicon:card-coin-filled",
	});
}

export default Component;
