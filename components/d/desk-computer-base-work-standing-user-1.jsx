import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/oeh7ozbma.css';
import '../../css/b/bnlj8dbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="oeh7ozbma"/><path class="bnlj8dbbv"/></g>`,
		"fallback": "streamline-freehand:desk-computer-base-work-standing-user-1",
	});
}

export default Component;
