import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bmgc78bsz.css';
import '../../css/n/nasjo9_5v.css';
import '../../css/f/f0ly2e3dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bmgc78bsz"/><path class="nasjo9_5v"/><path class="f0ly2e3dy"/></g>`,
		"fallback": "streamline-freehand-color:escalator-descend-person",
	});
}

export default Component;
