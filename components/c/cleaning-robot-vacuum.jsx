import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/r5c5j4bbq.css';
import '../../css/j/j-czlub9k.css';
import '../../css/p/pdlm26v3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="r5c5j4bbq"/><path class="j-czlub9k"/><path class="pdlm26v3f"/></g>`,
		"fallback": "streamline-freehand-color:cleaning-robot-vacuum",
	});
}

export default Component;
