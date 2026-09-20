import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oqxfih1mm.css';
import '../../css/s/sxtjvlu_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oqxfih1mm"/><path class="sxtjvlu_z"/></g>`,
		"fallback": "reicon:arrow-door-out-filled",
	});
}

export default Component;
