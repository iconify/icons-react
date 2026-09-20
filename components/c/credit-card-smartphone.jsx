import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l5q0p9bmc.css';
import '../../css/o/ob-x9ab0f.css';
import '../../css/r/r25ipg7te.css';
import '../../css/u/u99kjbv1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l5q0p9bmc"/><path class="ob-x9ab0f"/><path class="r25ipg7te"/><path class="u99kjbv1u"/></g>`,
		"fallback": "streamline-freehand:credit-card-smartphone",
	});
}

export default Component;
