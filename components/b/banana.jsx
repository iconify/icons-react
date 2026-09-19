import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/i07364b7x.css';
import '../../css/x/xao6embbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="i07364b7x"/><path class="xao6embbl"/></g>`,
		"fallback": "icon-park:banana",
	});
}

export default Component;
