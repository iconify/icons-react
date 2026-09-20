import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/waq6unb6d.css';
import '../../css/d/dr6n93bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="waq6unb6d"/><path class="dr6n93bdy"/></g>`,
		"fallback": "streamline-freehand:fax-machine-paper-print",
	});
}

export default Component;
