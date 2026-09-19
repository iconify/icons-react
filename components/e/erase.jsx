import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qu89jbbtn.css';
import '../../css/s/sl25f3bsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="qu89jbbtn"/><path class="sl25f3bsr"/></g>`,
		"fallback": "icon-park:erase",
	});
}

export default Component;
