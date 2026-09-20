import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m5v8obcfr.css';
import '../../css/l/lsr8b0b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m5v8obcfr"/><path class="lsr8b0b1z"/></g>`,
		"fallback": "reicon:folder-lock-filled",
	});
}

export default Component;
