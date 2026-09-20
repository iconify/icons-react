import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wy_ed6lfp.css';
import '../../css/a/agl5xji2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wy_ed6lfp"/><path class="agl5xji2z"/></g>`,
		"fallback": "streamline-freehand:cloud-disable",
	});
}

export default Component;
