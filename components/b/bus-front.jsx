import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thixtc5-x.css';
import '../../css/l/l15q5353m.css';
import '../../css/r/rniciqbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thixtc5-x"/><path class="l15q5353m"/><path class="rniciqbuq"/></g>`,
		"fallback": "andrsrxn:bus-front",
	});
}

export default Component;
