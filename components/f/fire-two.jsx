import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vu3-4ud8d.css';
import '../../css/f/f7bmfqbpi.css';
import '../../css/n/nwevv1b6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vu3-4ud8d"/><path class="f7bmfqbpi"/><path class="nwevv1b6x"/></g>`,
		"fallback": "icon-park:fire-two",
	});
}

export default Component;
