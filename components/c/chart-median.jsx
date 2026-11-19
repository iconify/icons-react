import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2ok04bln.css';
import '../../css/i/iqp2h4b-l.css';
import '../../css/q/qeu4ox1-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2ok04bln"/><path clip-rule="evenodd" class="iqp2h4b-l"/><path class="qeu4ox1-m"/></g>`,
		"fallback": "andrsrxn:chart-median",
	});
}

export default Component;
