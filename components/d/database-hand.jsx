import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o_6h7rf9g.css';
import '../../css/l/lwv99hhri.css';
import '../../css/q/q57968b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o_6h7rf9g"/><path class="lwv99hhri"/><path class="q57968b6l"/></g>`,
		"fallback": "streamline-freehand:database-hand",
	});
}

export default Component;
