import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynz-wjbfo.css';
import '../../css/n/n7b68mqdf.css';
import '../../css/g/gp-xb9bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ynz-wjbfo"/><path class="n7b68mqdf"/><path class="gp-xb9bbq"/></g>`,
		"fallback": "streamline-cyber-color:business-chart-4",
	});
}

export default Component;
