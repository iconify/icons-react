import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y0miy-bej.css';
import '../../css/x/xb5_th8-b.css';
import '../../css/o/odbl5xbko.css';
import '../../css/s/s9kyitb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y0miy-bej"/><path class="xb5_th8-b"/><path class="odbl5xbko"/><path class="s9kyitb7q"/></g>`,
		"fallback": "streamline-freehand:calculator-calculator-app",
	});
}

export default Component;
