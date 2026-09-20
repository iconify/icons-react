import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q871ce89v.css';
import '../../css/p/pivu3fbnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q871ce89v"/><path class="pivu3fbnt"/></g>`,
		"fallback": "streamline-freehand-color:computer-bug-1",
	});
}

export default Component;
