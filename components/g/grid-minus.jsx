import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v7l97vx0k.css';
import '../../css/x/xcenf2bkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v7l97vx0k"/><path class="xcenf2bkt"/></g>`,
		"fallback": "iconoir:grid-minus",
	});
}

export default Component;
