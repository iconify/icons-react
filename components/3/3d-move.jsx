import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wnxve1hfv.css';
import '../../css/y/yw0f-6bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wnxve1hfv"/><path class="yw0f-6bvm"/></g>`,
		"fallback": "streamline-sharp-color:3d-move",
	});
}

export default Component;
