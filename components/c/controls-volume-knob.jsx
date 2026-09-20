import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h9o4z3bkr.css';
import '../../css/n/nanjsmb7e.css';
import '../../css/o/oiuzdwzyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h9o4z3bkr"/><path class="nanjsmb7e"/><path class="oiuzdwzyw"/></g>`,
		"fallback": "streamline-freehand-color:controls-volume-knob",
	});
}

export default Component;
