import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/obl4fsbsr.css';
import '../../css/s/shj84utyn.css';
import '../../css/i/ibfi7qbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="obl4fsbsr"/><path class="shj84utyn"/><path class="ibfi7qbpz"/></g>`,
		"fallback": "streamline-freehand-color:family-baby-change-diaper",
	});
}

export default Component;
