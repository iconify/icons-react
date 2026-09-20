import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i4294ybkm.css';
import '../../css/s/smqicbc-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i4294ybkm"/><path class="smqicbc-b"/></g>`,
		"fallback": "streamline-freehand:cleaning-man",
	});
}

export default Component;
