import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/no3bhqb-g.css';
import '../../css/s/sjjp336kj.css';
import '../../css/e/e1-0dm54i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="no3bhqb-g"/><path class="sjjp336kj"/><path class="e1-0dm54i"/></g>`,
		"fallback": "streamline-freehand:design-process-draw-pen",
	});
}

export default Component;
