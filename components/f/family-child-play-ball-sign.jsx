import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qelrpmbxt.css';
import '../../css/q/q9a1p2t7g.css';
import '../../css/c/ca6vo_0ub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qelrpmbxt"/><path class="q9a1p2t7g"/><path class="ca6vo_0ub"/></g>`,
		"fallback": "streamline-freehand-color:family-child-play-ball-sign",
	});
}

export default Component;
