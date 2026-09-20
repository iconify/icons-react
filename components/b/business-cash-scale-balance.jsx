import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/awghp3pyj.css';
import '../../css/l/l9s63tb1w.css';
import '../../css/d/dr_3fr28m.css';
import '../../css/r/r6hn8gbbw.css';
import '../../css/j/j4-bubc4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="awghp3pyj"/><path class="l9s63tb1w"/><path class="dr_3fr28m"/><path class="r6hn8gbbw"/><path class="j4-bubc4n"/></g>`,
		"fallback": "streamline-freehand-color:business-cash-scale-balance",
	});
}

export default Component;
