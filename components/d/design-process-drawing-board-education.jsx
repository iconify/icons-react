import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eq-pypbom.css';
import '../../css/l/lnorv1bdn.css';
import '../../css/i/ic2kofb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eq-pypbom"/><path class="lnorv1bdn"/><path class="ic2kofb0f"/></g>`,
		"fallback": "streamline-freehand:design-process-drawing-board-education",
	});
}

export default Component;
