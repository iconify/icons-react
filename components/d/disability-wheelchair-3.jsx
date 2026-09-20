import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p9tjgbb3f.css';
import '../../css/o/omv8bccwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p9tjgbb3f"/><path class="omv8bccwz"/></g>`,
		"fallback": "streamline-freehand:disability-wheelchair-3",
	});
}

export default Component;
