import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pi4v--bca.css';
import '../../css/j/j21bw5e7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pi4v--bca"/><path class="j21bw5e7j"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-end-sharp-duotone",
	});
}

export default Component;
