import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mfakywb0k.css';
import '../../css/s/s4337tbbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mfakywb0k"/><path class="s4337tbbk"/></g>`,
		"fallback": "icon-park:fruiter",
	});
}

export default Component;
