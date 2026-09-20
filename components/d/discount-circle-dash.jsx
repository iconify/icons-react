import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u4q62xb3x.css';
import '../../css/w/w_9idcbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u4q62xb3x"/><path class="w_9idcbkz"/></g>`,
		"fallback": "streamline-freehand:discount-circle-dash",
	});
}

export default Component;
