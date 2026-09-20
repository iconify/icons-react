import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j33-0cknq.css';
import '../../css/y/yrh-yz36i.css';
import '../../css/y/ynhcynb8o.css';
import '../../css/f/fzcr7h09t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j33-0cknq"/><path class="yrh-yz36i"/><path class="ynhcynb8o"/><path class="fzcr7h09t"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-basket-monitor",
	});
}

export default Component;
