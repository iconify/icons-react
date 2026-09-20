import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ua9op-bxc.css';
import '../../css/b/bkvbuybup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ua9op-bxc"/><path class="bkvbuybup"/></g>`,
		"fallback": "streamline-freehand:color-triangle",
	});
}

export default Component;
