import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujfou81ii.css';
import '../../css/r/rmxwhacwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujfou81ii"/><path class="rmxwhacwd"/></g>`,
		"fallback": "tdesign:city-5",
	});
}

export default Component;
