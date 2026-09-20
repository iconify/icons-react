import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dm0vrfbfa.css';
import '../../css/v/vyi79kb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dm0vrfbfa"/><path class="vyi79kb_x"/></g>`,
		"fallback": "reicon:cloud-bolt",
	});
}

export default Component;
