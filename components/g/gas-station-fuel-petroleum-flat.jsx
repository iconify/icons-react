import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn_zc8y2n.css';
import '../../css/f/fgdjm7aex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wn_zc8y2n"/><path clip-rule="evenodd" class="fgdjm7aex"/></g>`,
		"fallback": "streamline-sharp-color:gas-station-fuel-petroleum-flat",
	});
}

export default Component;
