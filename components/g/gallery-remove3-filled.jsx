import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qr50m27ac.css';
import '../../css/a/a05xr_gmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qr50m27ac"/><path class="a05xr_gmb"/></g>`,
		"fallback": "reicon:gallery-remove3-filled",
	});
}

export default Component;
