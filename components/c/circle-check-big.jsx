import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/o7ll1dfvp.css';
import '../../css/s/syyg-c6qz.css';
import '../../css/g/ga9ku1lbx.css';
import '../../css/j/jjx1g2bze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="o7ll1dfvp wm-shadow"/><path class="syyg-c6qz wm-shadow"/><path class="ga9ku1lbx"/><path class="jjx1g2bze"/></g>`,
		"fallback": "withicons-brutal:circle-check-big",
	});
}

export default Component;
